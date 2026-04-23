package com.rra.taxhandbook.faq.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rra.taxhandbook.common.enums.LanguageCode;
import com.rra.taxhandbook.faq.entity.FAQTranslation;

public interface FAQTranslationRepository extends JpaRepository<FAQTranslation, Long> {

	List<FAQTranslation> findByLanguage(LanguageCode language);
	Optional<FAQTranslation> findByFaq_IdAndLanguage(Long faqId, LanguageCode language);
	void deleteByFaq_Id(Long faqId);
}
