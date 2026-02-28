"use client";

import { Card, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import styles from "./FeatureCard.module.scss";
import { type Icon } from "@tabler/icons-react";

export type FeatureCardProps = {
	title: string;
	description: string;
	// icon: Icon;
};

export default function FeatureCard(props: FeatureCardProps) {
	const theme = useMantineTheme();
	return (
		<Card key={props.title} shadow="md" radius="md" className={styles.card} padding="xl">
			{/* <props.icon size={50} stroke={1.5} color={theme.colors.blue[6]} /> */}
			<Text fz="lg" fw={500} className={styles.cardTitle} mt="md">
				{props.title}
			</Text>
			<Text fz="sm" c="dimmed" mt="sm">
				{props.description}
			</Text>
		</Card>
	);
}
