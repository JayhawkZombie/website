"use client";

import React from "react";
import { Center, Container, Flex, Stack, Text, Title } from "@mantine/core";
import styles from "./page.module.scss";
import FeaturesCards from "@/components/ui/home/FeaturesCards";
import { IconStar } from "@tabler/icons-react";

const features = [
	{
		title: "Feature 1",
		description: "Description 1",
		// icon: IconStar,
	},
];

export default function Home() {
	return (
		<Container className={styles.main}>
			<Container className={styles.content}>
				<Center>
					<Stack gap="xs" align="center">
						<Text size="xl">Full Stack</Text>
						<Text size="xl">and</Text>
						<Text size="xl" className={styles.strobeRainbow}>
							Embedded Systems
						</Text>
					</Stack>
				</Center>
				<FeaturesCards features={features} />
			</Container>
		</Container>
	);
}
