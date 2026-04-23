package com.rra.taxhandbook.faq.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rra.taxhandbook.common.dto.ApiResponse;
import com.rra.taxhandbook.common.enums.ContentStatus;
import com.rra.taxhandbook.common.enums.LanguageCode;
import com.rra.taxhandbook.common.exception.ResourceNotFoundException;
import com.rra.taxhandbook.common.util.SlugUtil;
import com.rra.taxhandbook.faq.dto.FAQRequest;
import com.rra.taxhandbook.faq.dto.FAQResponse;
import com.rra.taxhandbook.faq.entity.FAQ;
import com.rra.taxhandbook.faq.entity.FAQTranslation;
import com.rra.taxhandbook.faq.repository.FAQRepository;
import com.rra.taxhandbook.faq.repository.FAQTranslationRepository;

@Service
public class FAQService {

	private final FAQRepository faqRepository;
	private final FAQTranslationRepository faqTranslationRepository;

	public FAQService(FAQRepository faqRepository, FAQTranslationRepository faqTranslationRepository) {
		this.faqRepository = faqRepository;
		this.faqTranslationRepository = faqTranslationRepository;
	}

	@Transactional(readOnly = true)
	public List<FAQResponse> getFAQs() {
		return getFAQs(LanguageCode.EN);
	}

	@Transactional(readOnly = true)
	public List<FAQResponse> getFAQs(LanguageCode locale) {
		LanguageCode language = locale == null ? LanguageCode.EN : locale;
		return faqTranslationRepository.findByLanguage(language).stream()
			.filter(translation -> translation.getFaq().getStatus() == ContentStatus.PUBLISHED)
			.map(this::toResponse)
			.toList();
	}

	@Transactional
	public ApiResponse<FAQResponse> createFAQ(FAQRequest request) {
		LanguageCode language = request.language() == null ? LanguageCode.EN : request.language();
		FAQ faq = faqRepository.save(new FAQ(SlugUtil.toSlug(request.question()), ContentStatus.PUBLISHED));
		FAQTranslation translation = faqTranslationRepository.save(new FAQTranslation(faq, language, request.question(), request.answer()));
		FAQResponse response = toResponse(translation);
		return new ApiResponse<>("FAQ created", response);
	}

	@Transactional(readOnly = true)
	public FAQResponse getFAQ(Long id, LanguageCode locale) {
		LanguageCode language = locale == null ? LanguageCode.EN : locale;
		FAQ faq = findFAQ(id);
		FAQTranslation translation = faqTranslationRepository.findByFaq_IdAndLanguage(id, language)
			.orElseThrow(() -> new ResourceNotFoundException("FAQ translation not found: " + id + " / " + language));
		return toResponse(translation);
	}

	@Transactional
	public ApiResponse<FAQResponse> updateFAQ(Long id, FAQRequest request) {
		LanguageCode language = request.language() == null ? LanguageCode.EN : request.language();
		FAQ faq = findFAQ(id);
		faq.update(SlugUtil.toSlug(request.question()));
		FAQTranslation translation = faqTranslationRepository.findByFaq_IdAndLanguage(id, language)
			.orElseGet(() -> new FAQTranslation(faq, language, request.question(), request.answer()));
		translation.update(request.question(), request.answer());
		FAQTranslation savedTranslation = faqTranslationRepository.save(translation);
		return new ApiResponse<>("FAQ updated", toResponse(savedTranslation));
	}

	@Transactional
	public ApiResponse<String> deleteFAQ(Long id) {
		FAQ faq = findFAQ(id);
		faqTranslationRepository.deleteByFaq_Id(id);
		faqRepository.delete(faq);
		return new ApiResponse<>("FAQ deleted", "Deleted FAQ " + id);
	}

	@Transactional
	public ApiResponse<FAQResponse> archiveFAQ(Long id, LanguageCode locale) {
		FAQ faq = findFAQ(id);
		faq.changeStatus(ContentStatus.ARCHIVED);
		return new ApiResponse<>("FAQ archived", getFAQ(id, locale));
	}

	@Transactional
	public ApiResponse<FAQResponse> restoreFAQ(Long id, LanguageCode locale) {
		FAQ faq = findFAQ(id);
		faq.changeStatus(ContentStatus.PUBLISHED);
		return new ApiResponse<>("FAQ restored", getFAQ(id, locale));
	}

	private FAQResponse toResponse(FAQTranslation translation) {
		return new FAQResponse(
			translation.getFaq().getId(),
			translation.getQuestion(),
			translation.getAnswer(),
			translation.getLanguage(),
			translation.getFaq().getStatus()
		);
	}

	private FAQ findFAQ(Long id) {
		return faqRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("FAQ not found: " + id));
	}
}
