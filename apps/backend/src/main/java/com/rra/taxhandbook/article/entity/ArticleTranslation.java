package com.rra.taxhandbook.article.entity;

import com.rra.taxhandbook.common.enums.LanguageCode;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "article_translations")
public class ArticleTranslation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(optional = false)
	@JoinColumn(name = "article_id", nullable = false)
	private Article article;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private LanguageCode language;

	@Column(nullable = false)
	private String title;

	@Column(length = 2000)
	private String summary;

	@Column(length = 12000)
	private String content;

	protected ArticleTranslation() {}

	public ArticleTranslation(Article article, LanguageCode language, String title, String summary, String content) {
		this.article = article;
		this.language = language;
		this.title = title;
		this.summary = summary;
		this.content = content;
	}

	public Long getId() { return id; }
	public Article getArticle() { return article; }
	public LanguageCode getLanguage() { return language; }
	public String getTitle() { return title; }
	public String getSummary() { return summary; }
	public String getContent() { return content; }

	public void update(String title, String summary, String content) {
		this.title = title;
		this.summary = summary;
		this.content = content;
	}
}
