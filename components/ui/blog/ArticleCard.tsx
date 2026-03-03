"use client";
import React from "react";

import { IconColorSwatch } from "@tabler/icons-react";
import { Paper, Text, ThemeIcon } from "@mantine/core";
import styles from "./ArticleCard.module.scss";
import Link from "next/link";

type ArticleCardProps = {
	href: string;
	title: string;
	description: string;
};

export default function ArticleCard(props: ArticleCardProps) {
	return (
		<Link href={props.href}>
			<Paper withBorder radius="md" className={styles.card}>
				<ThemeIcon
					size="xl"
					radius="md"
					variant="gradient"
					gradient={{ deg: 0, from: "pink", to: "orange" }}
				>
					<IconColorSwatch size={28} stroke={1.5} />
				</ThemeIcon>
				<Text size="xl" fw={500} mt="md">
					{props.title}
				</Text>
				<Text size="sm" mt="sm" c="dimmed">
					{props.description}
				</Text>
			</Paper>
		</Link>
	);
}
