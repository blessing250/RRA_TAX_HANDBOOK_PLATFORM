package com.rra.taxhandbook.article.controller;

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

import com.rra.taxhandbook.article.dto.ArticleRequest;
import com.rra.taxhandbook.article.dto.ArticleResponse;
import com.rra.taxhandbook.article.service.ArticleService;
import com.rra.taxhandbook.common.dto.ApiResponse;
import com.rra.taxhandbook.common.enums.LanguageCode;

@RestController
@RequestMapping("/api/admin/articles")
public class AdminArticleController {

	private final ArticleService articleService;

	public AdminArticleController(ArticleService articleService) {
		this.articleService = articleService;
	}

	@GetMapping
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public List<ArticleResponse> getArticles(@RequestParam(defaultValue = "EN") LanguageCode locale) {
		return articleService.getArticles(locale);
	}

	@GetMapping("/{id}")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ArticleResponse getArticle(@PathVariable Long id, @RequestParam(defaultValue = "EN") LanguageCode locale) {
		return articleService.getArticle(id, locale);
	}

	@PostMapping
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<ArticleResponse> createArticle(@RequestBody ArticleRequest request) {
		return articleService.createArticle(request);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<ArticleResponse> updateArticle(@PathVariable Long id, @RequestBody ArticleRequest request) {
		return articleService.updateArticle(id, request);
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<String> deleteArticle(@PathVariable Long id) {
		return articleService.deleteArticle(id);
	}

	@PostMapping("/{id}/archive")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<ArticleResponse> archiveArticle(@PathVariable Long id, @RequestParam(defaultValue = "EN") LanguageCode locale) {
		return articleService.archiveArticle(id, locale);
	}

	@PostMapping("/{id}/restore")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<ArticleResponse> restoreArticle(@PathVariable Long id, @RequestParam(defaultValue = "EN") LanguageCode locale) {
		return articleService.restoreArticle(id, locale);
	}
}
