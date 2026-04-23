package com.rra.taxhandbook.faq.entity;

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
@Table(name = "faq_translations")
public class FAQTranslation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(optional = false)
	@JoinColumn(name = "faq_id", nullable = false)
	private FAQ faq;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private LanguageCode language;

	@Column(nullable = false)
	private String question;

	@Column(length = 4000, nullable = false)
	private String answer;

	protected FAQTranslation() {}

	public FAQTranslation(FAQ faq, LanguageCode language, String question, String answer) {
		this.faq = faq;
		this.language = language;
		this.question = question;
		this.answer = answer;
	}

	public Long getId() { return id; }
	public FAQ getFaq() { return faq; }
	public LanguageCode getLanguage() { return language; }
	public String getQuestion() { return question; }
	public String getAnswer() { return answer; }

	public void update(String question, String answer) {
		this.question = question;
		this.answer = answer;
	}
}
