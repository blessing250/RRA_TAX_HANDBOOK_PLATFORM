package com.rra.taxhandbook.faq.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rra.taxhandbook.common.enums.ContentStatus;
import com.rra.taxhandbook.faq.entity.FAQ;

public interface FAQRepository extends JpaRepository<FAQ, Long> {

	List<FAQ> findAll();
	List<FAQ> findByStatus(ContentStatus status);
}
