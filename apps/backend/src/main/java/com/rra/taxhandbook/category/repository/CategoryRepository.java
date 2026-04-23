package com.rra.taxhandbook.category.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rra.taxhandbook.category.entity.Category;
import com.rra.taxhandbook.common.enums.ContentStatus;

public interface CategoryRepository extends JpaRepository<Category, Long> {

	List<Category> findAll();
	List<Category> findByStatus(ContentStatus status);
}
