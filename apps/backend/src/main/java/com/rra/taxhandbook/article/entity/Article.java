package com.rra.taxhandbook.article.entity;

import java.time.Instant;

import com.rra.taxhandbook.common.enums.ContentStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "articles")
public class Article {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = true)
	private String slug;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private ContentStatus status;

	@Column(name = "created_at", nullable = false)
	private Instant createdAt;

	@Column(name = "updated_at", nullable = false)
	private Instant updatedAt;

	protected Article() {}

	public Article(String slug, ContentStatus status, Instant createdAt, Instant updatedAt) {
		this.slug = slug;
		this.status = status;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Long getId() { return id; }
	public String getSlug() { return slug; }
	public ContentStatus getStatus() { return status; }
	public Instant getCreatedAt() { return createdAt; }
	public Instant getUpdatedAt() { return updatedAt; }

	public void update(String slug, ContentStatus status, Instant updatedAt) {
		this.slug = slug;
		this.status = status;
		this.updatedAt = updatedAt;
	}

	public void changeStatus(ContentStatus status) {
		this.status = status;
	}

	public void touch(Instant updatedAt) {
		this.updatedAt = updatedAt;
	}
}
