package com.rra.taxhandbook.document.entity;

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
@Table(name = "documents")
public class Document {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String title;

	@Column(name = "file_name", nullable = false)
	private String fileName;

	@Column(name = "file_url", nullable = false)
	private String fileUrl;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private ContentStatus status;

	@Column(name = "created_at", nullable = false)
	private Instant createdAt;

	protected Document() {}

	public Document(String title, String fileName, String fileUrl, ContentStatus status, Instant createdAt) {
		this.title = title;
		this.fileName = fileName;
		this.fileUrl = fileUrl;
		this.status = status;
		this.createdAt = createdAt;
	}

	public Long getId() { return id; }
	public String getTitle() { return title; }
	public String getFileName() { return fileName; }
	public String getFileUrl() { return fileUrl; }
	public ContentStatus getStatus() { return status; }
	public Instant getCreatedAt() { return createdAt; }

	public void update(String title, String fileName, String fileUrl) {
		this.title = title;
		this.fileName = fileName;
		this.fileUrl = fileUrl;
	}

	public void changeStatus(ContentStatus status) {
		this.status = status;
	}
}
