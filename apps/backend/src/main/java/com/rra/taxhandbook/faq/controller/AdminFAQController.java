package com.rra.taxhandbook.faq.controller;

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

import com.rra.taxhandbook.common.dto.ApiResponse;
import com.rra.taxhandbook.common.enums.LanguageCode;
import com.rra.taxhandbook.faq.dto.FAQRequest;
import com.rra.taxhandbook.faq.dto.FAQResponse;
import com.rra.taxhandbook.faq.service.FAQService;

@RestController
@RequestMapping("/api/admin/faqs")
public class AdminFAQController {

	private final FAQService faqService;

	public AdminFAQController(FAQService faqService) {
		this.faqService = faqService;
	}

	@GetMapping
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public List<FAQResponse> getFAQs(@RequestParam(defaultValue = "EN") LanguageCode locale) {
		return faqService.getFAQs(locale);
	}

	@GetMapping("/{id}")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public FAQResponse getFAQ(@PathVariable Long id, @RequestParam(defaultValue = "EN") LanguageCode locale) {
		return faqService.getFAQ(id, locale);
	}

	@PostMapping
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<FAQResponse> createFAQ(@RequestBody FAQRequest request) {
		return faqService.createFAQ(request);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<FAQResponse> updateFAQ(@PathVariable Long id, @RequestBody FAQRequest request) {
		return faqService.updateFAQ(id, request);
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<String> deleteFAQ(@PathVariable Long id) {
		return faqService.deleteFAQ(id);
	}

	@PostMapping("/{id}/archive")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<FAQResponse> archiveFAQ(@PathVariable Long id, @RequestParam(defaultValue = "EN") LanguageCode locale) {
		return faqService.archiveFAQ(id, locale);
	}

	@PostMapping("/{id}/restore")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<FAQResponse> restoreFAQ(@PathVariable Long id, @RequestParam(defaultValue = "EN") LanguageCode locale) {
		return faqService.restoreFAQ(id, locale);
	}
}
