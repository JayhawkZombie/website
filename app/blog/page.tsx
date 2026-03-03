"use client";
import React from "react";
import { Container, Stack, Text, Title } from "@mantine/core";
import styles from "./page.module.scss";

import ArticleCard from "@/components/ui/blog/ArticleCard";

const articles = [
	{
		href: "/blog/starting-with-embedded-systems",
		title: "Starting with Embedded Systems",
		description: "How I got started with embedded systems.",
	},
];

export default function Blog() {
	return (
		<Container className={styles.main}>
			<Title order={1}>Blog</Title>
			<Stack gap="md" justify="center" align="center">
				{articles.map((article) => (
					<ArticleCard key={article.href} {...article} />
				))}
			</Stack>
		</Container>
	);
}
