package com.rra.taxhandbook.article.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rra.taxhandbook.article.entity.ArticleTranslation;
import com.rra.taxhandbook.common.enums.LanguageCode;

public interface ArticleTranslationRepository extends JpaRepository<ArticleTranslation, Long> {

	List<ArticleTranslation> findByLanguage(LanguageCode language);
	Optional<ArticleTranslation> findByArticle_IdAndLanguage(Long articleId, LanguageCode language);
	void deleteByArticle_Id(Long articleId);
}
