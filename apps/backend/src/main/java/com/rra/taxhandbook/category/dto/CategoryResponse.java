package com.rra.taxhandbook.category.dto;

import com.rra.taxhandbook.common.enums.ContentStatus;
import com.rra.taxhandbook.common.enums.LanguageCode;

public record CategoryResponse(
	Long id,
	String name,
	String slug,
	LanguageCode language,
	ContentStatus status
) {
}
