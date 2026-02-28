"use client";

import React from "react";
import FeatureCard, { type FeatureCardProps } from "./FeatureCard";
import { Badge, Container, Group, SimpleGrid, Text, Title } from "@mantine/core";
import styles from "./FeaturesCards.module.scss";

export type FeaturesCardsProps = {
	features: FeatureCardProps[];
};

export default function FeaturesCards(props: FeaturesCardsProps) {
	return (
		<Container>
			{/* <Group justify="center">
				<Badge variant="filled" size="lg">
					<Text size="lg">{"Something here"}</Text>
				</Badge>
			</Group> */}

			<Title order={2} className={styles.title} ta="center" mt="sm">
				<Text>{"Some title here"}</Text>
			</Title>

			<Title order={3} c="dimmed" className={styles.description} ta="center" mt="md">
				<Text>{"Some description here"}</Text>
			</Title>
			<SimpleGrid
				cols={{
					base: 1,
					md: 3,
				}}
				spacing="xl"
				mt="xl"
			>
				{props.features.map((feature) => (
					<FeatureCard key={feature.title} {...feature} />
				))}
			</SimpleGrid>
		</Container>
	);
}
