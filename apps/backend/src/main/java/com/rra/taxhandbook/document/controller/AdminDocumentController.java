package com.rra.taxhandbook.document.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rra.taxhandbook.common.dto.ApiResponse;
import com.rra.taxhandbook.document.dto.DocumentRequest;
import com.rra.taxhandbook.document.dto.DocumentResponse;
import com.rra.taxhandbook.document.service.DocumentService;

@RestController
@RequestMapping("/api/admin/documents")
public class AdminDocumentController {

	private final DocumentService documentService;

	public AdminDocumentController(DocumentService documentService) {
		this.documentService = documentService;
	}

	@GetMapping
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public List<DocumentResponse> getDocuments() {
		return documentService.getAdminDocuments();
	}

	@GetMapping("/{id}")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public DocumentResponse getDocument(@PathVariable Long id) {
		return documentService.getDocument(id);
	}

	@PostMapping
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<DocumentResponse> createDocument(@RequestBody DocumentRequest request) {
		return documentService.createDocument(request);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<DocumentResponse> updateDocument(@PathVariable Long id, @RequestBody DocumentRequest request) {
		return documentService.updateDocument(id, request);
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<String> deleteDocument(@PathVariable Long id) {
		return documentService.deleteDocument(id);
	}

	@PostMapping("/{id}/archive")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<DocumentResponse> archiveDocument(@PathVariable Long id) {
		return documentService.archiveDocument(id);
	}

	@PostMapping("/{id}/restore")
	@PreAuthorize("hasAnyRole('EDITOR','ADMIN')")
	public ApiResponse<DocumentResponse> restoreDocument(@PathVariable Long id) {
		return documentService.restoreDocument(id);
	}
}
