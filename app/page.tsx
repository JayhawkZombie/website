"use client";

import React from "react";
import { Center, Container, Flex, Stack, Text, Title } from "@mantine/core";
import styles from "./page.module.scss";
import FeaturesCards from "@/components/ui/home/FeaturesCards";
import { IconStar } from "@tabler/icons-react";

const features = [
	{
		title: "Full Stack Developer",
		description: "Description 1",
		// icon: IconStar,
	},
	{
		title: "Embedded Systems",
		description: "Description 2",
		// icon: IconStar,
	},
];

export default function Home() {
	return (
		<Container className={styles.main}>
			<Container className={styles.content}>
				<Center>
					<Stack gap="xs" align="center">
						<Title order={2} className={styles.title} ta="center" mt="sm">
							<Text>{"Full Stack Developer"}</Text>
							<Text>{"and"}</Text>
							<Text className={styles.strobeRainbow}>{"Embedded Systems"}</Text>
						</Title>

						<Title order={3} c="dimmed" className={styles.description} ta="center" mt="md">
							<Text>{"Some description here"}</Text>
						</Title>
					</Stack>
				</Center>
				<FeaturesCards features={features} />
			</Container>
		</Container>
	);
}
