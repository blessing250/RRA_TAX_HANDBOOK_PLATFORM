package com.rra.taxhandbook.document.service;

import java.time.Instant;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rra.taxhandbook.common.dto.ApiResponse;
import com.rra.taxhandbook.common.enums.ContentStatus;
import com.rra.taxhandbook.common.exception.ResourceNotFoundException;
import com.rra.taxhandbook.document.dto.DocumentRequest;
import com.rra.taxhandbook.document.dto.DocumentResponse;
import com.rra.taxhandbook.document.entity.Document;
import com.rra.taxhandbook.document.repository.DocumentRepository;

@Service
public class DocumentService {

	private final DocumentRepository documentRepository;

	public DocumentService(DocumentRepository documentRepository) {
		this.documentRepository = documentRepository;
	}

	@Transactional(readOnly = true)
	public List<DocumentResponse> getDocuments() {
		return documentRepository.findByStatus(ContentStatus.PUBLISHED).stream()
			.map(this::toResponse)
			.toList();
	}

	@Transactional(readOnly = true)
	public List<DocumentResponse> getAdminDocuments() {
		return documentRepository.findAll().stream()
			.map(this::toResponse)
			.toList();
	}

	@Transactional
	public ApiResponse<DocumentResponse> createDocument(DocumentRequest request) {
		Document document = documentRepository.save(new Document(request.title(), request.fileName(), request.fileUrl(), ContentStatus.PUBLISHED, Instant.now()));
		DocumentResponse response = toResponse(document);
		return new ApiResponse<>("Document created", response);
	}

	@Transactional(readOnly = true)
	public DocumentResponse getDocument(Long id) {
		return toResponse(findDocument(id));
	}

	@Transactional
	public ApiResponse<DocumentResponse> updateDocument(Long id, DocumentRequest request) {
		Document document = findDocument(id);
		document.update(request.title(), request.fileName(), request.fileUrl());
		return new ApiResponse<>("Document updated", toResponse(document));
	}

	@Transactional
	public ApiResponse<String> deleteDocument(Long id) {
		Document document = findDocument(id);
		documentRepository.delete(document);
		return new ApiResponse<>("Document deleted", "Deleted document " + id);
	}

	@Transactional
	public ApiResponse<DocumentResponse> archiveDocument(Long id) {
		Document document = findDocument(id);
		document.changeStatus(ContentStatus.ARCHIVED);
		return new ApiResponse<>("Document archived", toResponse(document));
	}

	@Transactional
	public ApiResponse<DocumentResponse> restoreDocument(Long id) {
		Document document = findDocument(id);
		document.changeStatus(ContentStatus.PUBLISHED);
		return new ApiResponse<>("Document restored", toResponse(document));
	}

	private DocumentResponse toResponse(Document document) {
		return new DocumentResponse(
			document.getId(),
			document.getTitle(),
			document.getFileName(),
			document.getFileUrl(),
			document.getStatus()
		);
	}

	private Document findDocument(Long id) {
		return documentRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Document not found: " + id));
	}
}
