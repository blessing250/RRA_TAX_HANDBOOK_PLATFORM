package com.rra.taxhandbook.document.dto;

import com.rra.taxhandbook.common.enums.ContentStatus;

public record DocumentResponse(
	Long id,
	String title,
	String fileName,
	String fileUrl,
	ContentStatus status
) {
}
