package com.rra.taxhandbook.category.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rra.taxhandbook.category.dto.CategoryRequest;
import com.rra.taxhandbook.category.dto.CategoryResponse;
import com.rra.taxhandbook.category.entity.Category;
import com.rra.taxhandbook.category.entity.CategoryTranslation;
import com.rra.taxhandbook.category.repository.CategoryRepository;
import com.rra.taxhandbook.category.repository.CategoryTranslationRepository;
import com.rra.taxhandbook.common.dto.ApiResponse;
import com.rra.taxhandbook.common.enums.ContentStatus;
import com.rra.taxhandbook.common.enums.LanguageCode;
import com.rra.taxhandbook.common.exception.ResourceNotFoundException;
import com.rra.taxhandbook.common.util.SlugUtil;

@Service
public class CategoryService {

	private final CategoryRepository categoryRepository;
	private final CategoryTranslationRepository categoryTranslationRepository;

	public CategoryService(CategoryRepository categoryRepository, CategoryTranslationRepository categoryTranslationRepository) {
		this.categoryRepository = categoryRepository;
		this.categoryTranslationRepository = categoryTranslationRepository;
	}

	@Transactional(readOnly = true)
	public List<CategoryResponse> getCategories() {
		return getCategories(LanguageCode.EN);
	}

	@Transactional(readOnly = true)
	public List<CategoryResponse> getCategories(LanguageCode locale) {
		LanguageCode language = locale == null ? LanguageCode.EN : locale;
		return categoryTranslationRepository.findByLanguage(language).stream()
			.filter(translation -> translation.getCategory().getStatus() == ContentStatus.PUBLISHED)
			.map(this::toResponse)
			.toList();
	}

	@Transactional
	public ApiResponse<CategoryResponse> createCategory(CategoryRequest request) {
		LanguageCode language = request.language() == null ? LanguageCode.EN : request.language();
		Category category = categoryRepository.save(new Category(SlugUtil.toSlug(request.name()), ContentStatus.PUBLISHED));
		CategoryTranslation translation = categoryTranslationRepository.save(new CategoryTranslation(category, language, request.name()));
		CategoryResponse response = toResponse(translation);
		return new ApiResponse<>("Category created", response);
	}

	@Transactional(readOnly = true)
	public CategoryResponse getCategory(Long id, LanguageCode locale) {
		LanguageCode language = locale == null ? LanguageCode.EN : locale;
		Category category = findCategory(id);
		CategoryTranslation translation = categoryTranslationRepository.findByCategory_IdAndLanguage(id, language)
			.orElseThrow(() -> new ResourceNotFoundException("Category translation not found: " + id + " / " + language));
		return toResponse(translation);
	}

	@Transactional
	public ApiResponse<CategoryResponse> updateCategory(Long id, CategoryRequest request) {
		LanguageCode language = request.language() == null ? LanguageCode.EN : request.language();
		Category category = findCategory(id);
		category.update(SlugUtil.toSlug(request.name()));
		CategoryTranslation translation = categoryTranslationRepository.findByCategory_IdAndLanguage(id, language)
			.orElseGet(() -> new CategoryTranslation(category, language, request.name()));
		translation.update(request.name());
		CategoryTranslation savedTranslation = categoryTranslationRepository.save(translation);
		return new ApiResponse<>("Category updated", toResponse(savedTranslation));
	}

	@Transactional
	public ApiResponse<String> deleteCategory(Long id) {
		Category category = findCategory(id);
		categoryTranslationRepository.deleteByCategory_Id(id);
		categoryRepository.delete(category);
		return new ApiResponse<>("Category deleted", "Deleted category " + id);
	}

	@Transactional
	public ApiResponse<CategoryResponse> archiveCategory(Long id, LanguageCode locale) {
		Category category = findCategory(id);
		category.changeStatus(ContentStatus.ARCHIVED);
		return new ApiResponse<>("Category archived", getCategory(id, locale));
	}

	@Transactional
	public ApiResponse<CategoryResponse> restoreCategory(Long id, LanguageCode locale) {
		Category category = findCategory(id);
		category.changeStatus(ContentStatus.PUBLISHED);
		return new ApiResponse<>("Category restored", getCategory(id, locale));
	}

	private CategoryResponse toResponse(CategoryTranslation translation) {
		return new CategoryResponse(
			translation.getCategory().getId(),
			translation.getName(),
			translation.getCategory().getSlug(),
			translation.getLanguage(),
			translation.getCategory().getStatus()
		);
	}

	private Category findCategory(Long id) {
		return categoryRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Category not found: " + id));
	}
}
