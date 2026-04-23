package com.rra.taxhandbook.faq.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rra.taxhandbook.common.enums.LanguageCode;
import com.rra.taxhandbook.faq.dto.FAQResponse;
import com.rra.taxhandbook.faq.service.FAQService;

@RestController
@RequestMapping("/api/faqs")
public class PublicFAQController {

	private final FAQService faqService;

	public PublicFAQController(FAQService faqService) {
		this.faqService = faqService;
	}

	@GetMapping
	public List<FAQResponse> getFAQs(@RequestParam(defaultValue = "EN") LanguageCode locale) {
		return faqService.getFAQs(locale);
	}
}
