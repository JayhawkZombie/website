"use client";

import React from "react";
import FeatureCard, { type FeatureCardProps } from "./FeatureCard";
import { Badge, Center, Container, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import styles from "./FeaturesCards.module.scss";

export type FeaturesCardsProps = {
	features: FeatureCardProps[];
};

export default function FeaturesCards(props: FeaturesCardsProps) {
	return (
		<Container>
			<Center>
				{/* <Group justify="center">
				<Badge variant="filled" size="lg">
					<Text size="lg">{"Something here"}</Text>
				</Badge>
			</Group> */}

				<SimpleGrid
					cols={{
						base: 1,
						md: 2,
					}}
					spacing="xl"
					mt="xl"
				>
					{props.features.map((feature) => (
						<FeatureCard key={feature.title} {...feature} />
					))}
				</SimpleGrid>
			</Center>
		</Container>
	);
}
