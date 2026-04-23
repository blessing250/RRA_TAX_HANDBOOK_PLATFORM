package com.rra.taxhandbook.article.service;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rra.taxhandbook.article.dto.ArticleRequest;
import com.rra.taxhandbook.article.dto.ArticleResponse;
import com.rra.taxhandbook.article.dto.ArticleSearchRequest;
import com.rra.taxhandbook.article.entity.Article;
import com.rra.taxhandbook.article.entity.ArticleTranslation;
import com.rra.taxhandbook.article.repository.ArticleRepository;
import com.rra.taxhandbook.article.repository.ArticleTranslationRepository;
import com.rra.taxhandbook.common.dto.ApiResponse;
import com.rra.taxhandbook.common.enums.ContentStatus;
import com.rra.taxhandbook.common.enums.LanguageCode;
import com.rra.taxhandbook.common.exception.ResourceNotFoundException;
import com.rra.taxhandbook.common.util.SlugUtil;

@Service
public class ArticleService {

	private final ArticleRepository articleRepository;
	private final ArticleTranslationRepository articleTranslationRepository;

	public ArticleService(ArticleRepository articleRepository, ArticleTranslationRepository articleTranslationRepository) {
		this.articleRepository = articleRepository;
		this.articleTranslationRepository = articleTranslationRepository;
	}

	@Transactional(readOnly = true)
	public List<ArticleResponse> getArticles() {
		return getArticles(LanguageCode.EN);
	}

	@Transactional(readOnly = true)
	public List<ArticleResponse> getArticles(LanguageCode locale) {
		List<Article> articles = articleRepository.findByStatusOrderByUpdatedAtDesc(ContentStatus.PUBLISHED);
		LanguageCode language = locale == null ? LanguageCode.EN : locale;
		Map<Long, ArticleTranslation> translations = articleTranslationRepository.findByLanguage(language).stream()
			.collect(Collectors.toMap(translation -> translation.getArticle().getId(), translation -> translation, (first, ignored) -> first));

		return articles.stream()
			.map(article -> toResponse(article, translations.get(article.getId())))
			.filter(Objects::nonNull)
			.toList();
	}

	public List<ArticleResponse> searchArticles(ArticleSearchRequest request) {
		String query = request.keyword() == null ? "" : request.keyword().trim().toLowerCase();
		LanguageCode language = request.language() == null ? LanguageCode.EN : request.language();
		return getArticles(language).stream()
			.filter(article -> query.isBlank() || article.title().toLowerCase().contains(query))
			.toList();
	}

	@Transactional
	public ApiResponse<ArticleResponse> createArticle(ArticleRequest request) {
		Instant now = Instant.now();
		LanguageCode language = request.language() == null ? LanguageCode.EN : request.language();
		ContentStatus status = request.status() == null ? ContentStatus.DRAFT : request.status();
		Article article = articleRepository.save(new Article(SlugUtil.toSlug(request.title()), status, now, now));
		ArticleTranslation translation = articleTranslationRepository.save(new ArticleTranslation(article, language, request.title(), request.summary(), request.content()));
		ArticleResponse response = toResponse(article, translation);
		return new ApiResponse<>("Article created", response);
	}

	@Transactional(readOnly = true)
	public ArticleResponse getArticle(Long id, LanguageCode locale) {
		LanguageCode language = locale == null ? LanguageCode.EN : locale;
		Article article = findArticle(id);
		ArticleTranslation translation = articleTranslationRepository.findByArticle_IdAndLanguage(id, language)
			.orElseThrow(() -> new ResourceNotFoundException("Article translation not found: " + id + " / " + language));
		return toResponse(article, translation);
	}

	@Transactional
	public ApiResponse<ArticleResponse> updateArticle(Long id, ArticleRequest request) {
		Instant now = Instant.now();
		LanguageCode language = request.language() == null ? LanguageCode.EN : request.language();
		ContentStatus status = request.status() == null ? ContentStatus.DRAFT : request.status();
		Article article = findArticle(id);
		article.update(SlugUtil.toSlug(request.title()), status, now);
		ArticleTranslation translation = articleTranslationRepository.findByArticle_IdAndLanguage(id, language)
			.orElseGet(() -> new ArticleTranslation(article, language, request.title(), request.summary(), request.content()));
		translation.update(request.title(), request.summary(), request.content());
		ArticleTranslation savedTranslation = articleTranslationRepository.save(translation);
		return new ApiResponse<>("Article updated", toResponse(article, savedTranslation));
	}

	@Transactional
	public ApiResponse<String> deleteArticle(Long id) {
		Article article = findArticle(id);
		articleTranslationRepository.deleteByArticle_Id(id);
		articleRepository.delete(article);
		return new ApiResponse<>("Article deleted", "Deleted article " + id);
	}

	@Transactional
	public ApiResponse<ArticleResponse> archiveArticle(Long id, LanguageCode locale) {
		Article article = findArticle(id);
		article.changeStatus(ContentStatus.ARCHIVED);
		article.touch(Instant.now());
		return new ApiResponse<>("Article archived", getArticle(id, locale));
	}

	@Transactional
	public ApiResponse<ArticleResponse> restoreArticle(Long id, LanguageCode locale) {
		Article article = findArticle(id);
		article.changeStatus(ContentStatus.PUBLISHED);
		article.touch(Instant.now());
		return new ApiResponse<>("Article restored", getArticle(id, locale));
	}

	private ArticleResponse toResponse(Article article, ArticleTranslation translation) {
		if (translation == null) {
			return null;
		}

		return new ArticleResponse(
			article.getId(),
			translation.getTitle(),
			article.getSlug(),
			translation.getLanguage(),
			article.getStatus()
		);
	}

	private Article findArticle(Long id) {
		return articleRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Article not found: " + id));
	}
}
