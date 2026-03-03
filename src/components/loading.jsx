import React from "react";

const SIZE_MAP = {
	sm: "w-6 h-6",
	md: "w-10 h-10",
	lg: "w-16 h-16",
};

export default function Loading({ size = "md", message }) {
	const sizeClass = SIZE_MAP[size] || SIZE_MAP.md;

	return (
		<div className="flex flex-col items-center justify-center space-y-2">
			<div className={`spinner ${sizeClass}`} aria-hidden="true" />
			{message && <div className="text-sm text-gray-600">{message}</div>}
		</div>
	);
}

