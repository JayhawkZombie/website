"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, Group, Text } from "@mantine/core";

function slugToTitle(slug: string): string {
	return slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
}

const SEGMENT_LABELS: Record<string, string> = {
	blog: "Blog",
};

export function Breadcrumbs() {
	const pathname = usePathname();
	const segments = pathname.split("/").filter(Boolean);

	if (segments.length === 0) {
		return null;
	}

	const items = segments.map((segment, index) => {
		const href = "/" + segments.slice(0, index + 1).join("/");
		const isLast = index === segments.length - 1;
		const label = SEGMENT_LABELS[segment] ?? slugToTitle(segment);

		return {
			label,
			href: isLast ? undefined : href,
		};
	});

	return (
		<Group gap="xs" mb="md">
			<Anchor component={Link} href="/" size="sm" c="dimmed">
				Home
			</Anchor>
			{items.map((item, index) => (
				<React.Fragment key={item.label}>
					<Text size="sm" c="dimmed" span>
						/
					</Text>
					{item.href ? (
						<Anchor component={Link} href={item.href} size="sm" c="dimmed">
							{item.label}
						</Anchor>
					) : (
						<Text size="sm" c="dimmed" span>
							{item.label}
						</Text>
					)}
				</React.Fragment>
			))}
		</Group>
	);
}
