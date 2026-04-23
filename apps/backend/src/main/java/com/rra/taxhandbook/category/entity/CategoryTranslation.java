package com.rra.taxhandbook.category.entity;

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
@Table(name = "category_translations")
public class CategoryTranslation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(optional = false)
	@JoinColumn(name = "category_id", nullable = false)
	private Category category;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private LanguageCode language;

	@Column(nullable = false)
	private String name;

	protected CategoryTranslation() {}

	public CategoryTranslation(Category category, LanguageCode language, String name) {
		this.category = category;
		this.language = language;
		this.name = name;
	}

	public Long getId() { return id; }
	public Category getCategory() { return category; }
	public LanguageCode getLanguage() { return language; }
	public String getName() { return name; }

	public void update(String name) {
		this.name = name;
	}
}
