package com.rra.taxhandbook.document.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rra.taxhandbook.common.enums.ContentStatus;
import com.rra.taxhandbook.document.entity.Document;

public interface DocumentRepository extends JpaRepository<Document, Long> {

	List<Document> findAll();
	List<Document> findByStatus(ContentStatus status);
}
