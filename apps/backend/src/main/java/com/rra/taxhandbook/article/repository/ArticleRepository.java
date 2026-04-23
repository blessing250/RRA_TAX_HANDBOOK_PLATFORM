package com.rra.taxhandbook.article.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rra.taxhandbook.common.enums.ContentStatus;
import com.rra.taxhandbook.article.entity.Article;

public interface ArticleRepository extends JpaRepository<Article, Long> {

	List<Article> findByStatusOrderByUpdatedAtDesc(ContentStatus status);
}
