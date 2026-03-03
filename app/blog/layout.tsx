"use client";

import { Container } from "@mantine/core";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<Container size="md">
			<Breadcrumbs />
			{children}
		</Container>
	);
}
