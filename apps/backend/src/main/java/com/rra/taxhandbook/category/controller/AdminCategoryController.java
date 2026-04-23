package com.rra.taxhandbook.category.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rra.taxhandbook.category.dto.CategoryRequest;
import com.rra.taxhandbook.category.dto.CategoryResponse;
import com.rra.taxhandbook.category.service.CategoryService;
import com.rra.taxhandbook.common.dto.ApiResponse;
import com.rra.taxhandbook.common.enums.LanguageCode;

@RestController
@RequestMapping("/api/admin/categories")
public class AdminCategoryController {

	private final CategoryService categoryService;

	public AdminCategoryController(CategoryService categoryService) {
		this.categoryService = categoryService;
	}

	@GetMapping
	@PreAuthorize("hasRole('ADMIN')")
	public List<CategoryResponse> getCategories(@RequestParam(defaultValue = "EN") LanguageCode locale) {
		return categoryService.getCategories(locale);
	}

	@GetMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public CategoryResponse getCategory(@PathVariable Long id, @RequestParam(defaultValue = "EN") LanguageCode locale) {
		return categoryService.getCategory(id, locale);
	}

	@PostMapping
	@PreAuthorize("hasRole('ADMIN')")
	public ApiResponse<CategoryResponse> createCategory(@RequestBody CategoryRequest request) {
		return categoryService.createCategory(request);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ApiResponse<CategoryResponse> updateCategory(@PathVariable Long id, @RequestBody CategoryRequest request) {
		return categoryService.updateCategory(id, request);
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ApiResponse<String> deleteCategory(@PathVariable Long id) {
		return categoryService.deleteCategory(id);
	}

	@PostMapping("/{id}/archive")
	@PreAuthorize("hasRole('ADMIN')")
	public ApiResponse<CategoryResponse> archiveCategory(@PathVariable Long id, @RequestParam(defaultValue = "EN") LanguageCode locale) {
		return categoryService.archiveCategory(id, locale);
	}

	@PostMapping("/{id}/restore")
	@PreAuthorize("hasRole('ADMIN')")
	public ApiResponse<CategoryResponse> restoreCategory(@PathVariable Long id, @RequestParam(defaultValue = "EN") LanguageCode locale) {
		return categoryService.restoreCategory(id, locale);
	}
}
