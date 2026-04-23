package com.rra.taxhandbook.faq.entity;

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
@Table(name = "faqs")
public class FAQ {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = true)
	private String slug;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private ContentStatus status;

	protected FAQ() {}

	public FAQ(String slug, ContentStatus status) {
		this.slug = slug;
		this.status = status;
	}

	public Long getId() { return id; }
	public String getSlug() { return slug; }
	public ContentStatus getStatus() { return status; }

	public void update(String slug) {
		this.slug = slug;
	}

	public void changeStatus(ContentStatus status) {
		this.status = status;
	}
}
