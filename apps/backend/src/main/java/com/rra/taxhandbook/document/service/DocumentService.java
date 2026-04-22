package com.rra.taxhandbook.document.service;

import java.util.List;
import java.time.Year;
import org.springframework.stereotype.Service;

import com.rra.taxhandbook.common.dto.ApiResponse;
import com.rra.taxhandbook.document.dto.DocumentRequest;
import com.rra.taxhandbook.document.dto.DocumentResponse;

@Service
public class DocumentService {

	public List<DocumentResponse> getDocuments() {
    int currentYear = Year.now().getValue();
		return List.of(new DocumentResponse(1L, "Tax Handbook " + currentYear, "RRA_Tax_Handbook_" + currentYear + "_Final.pdf", "/documents/tax-handbook-" + currentYear));
	}

	public ApiResponse<DocumentResponse> createDocument(DocumentRequest request) {
		DocumentResponse response = new DocumentResponse(2L, request.title(), request.fileName(), request.fileUrl());
		return new ApiResponse<>("Document scaffold created", response);
	}
}
