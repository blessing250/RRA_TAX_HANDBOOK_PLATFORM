package com.rra.taxhandbook.category.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rra.taxhandbook.category.entity.CategoryTranslation;
import com.rra.taxhandbook.common.enums.LanguageCode;

public interface CategoryTranslationRepository extends JpaRepository<CategoryTranslation, Long> {

	List<CategoryTranslation> findByLanguage(LanguageCode language);
	Optional<CategoryTranslation> findByCategory_IdAndLanguage(Long categoryId, LanguageCode language);
	void deleteByCategory_Id(Long categoryId);
}
