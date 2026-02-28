"use client";

import React from "react";
import { Center, Container, Stack, Text, Title } from "@mantine/core";
import styles from "./page.module.scss";
import FeaturesCards from "@/components/ui/home/FeaturesCards";
import { ZoomieUnderline } from "@/components/ui/ZoomieUnderline";
const features = [
	{
		title: "Full Stack Developer",
		description:
			"Full-Stack Developer with 5+ years of experience building scalable web applications.",
		// icon: IconStar,
	},
	{
		title: "Embedded Systems Engineer",
		description:
			"Experience in designing and developing embedded firmware in C++, primarily for the ESP32 family. Developing with PlatformIO and the Arduino framework, I create custom LED setups with custom hardware configurations for each project's needs.",
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
							<ZoomieUnderline>
								<Text span>Full Stack Developer</Text>
								<Text span> and </Text>
								<Text span className={styles.strobeRainbow}>
									Embedded Systems
								</Text>
							</ZoomieUnderline>
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
