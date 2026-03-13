"use client";

import { Carousel } from "@mantine/carousel";
import { Button, Card, Container, Flex, Overlay, Paper, Text, Title } from "@mantine/core";
import styles from "./ProjectCarousel.module.scss";
import Link from "next/link";
import React from "react";

type CardProps = {
	imageUrl?: string;
	previewContent?: () => React.JSX.Element;
	title: string;
	description: string;
	category: string;
	link: string;
};

type ProjectCarouselProps = {
	projects: CardProps[];
};

function ProjectCard(props: CardProps) {
	const link = `/portfolio/${props.link}`;
	let style = {};
	if (props.imageUrl) {
		style = {
			backgroundImage: `url(${props.imageUrl})`,
		};
	}
	let previewContent;
	if (props.previewContent) {
		previewContent = <div>{props.previewContent()}</div>;
	}
	return (
		<Card radius="md" shadow="sm" padding="sm" className={styles.cardContainer} p="lg">
			<Paper shadow="md" p="xl" radius="md" style={style} className={styles.card}>
				<div className={styles.titleContainer}>
					<Title order={3} className={styles.title}>
						{props.title}
					</Title>
					<Text className={styles.category} size="xs">
						{props.category}
					</Text>
				</div>
				<Overlay h="100%" className={styles.textOverlay} component="div">
					<Container h="100%">
						<Flex h="100%" direction="column" justify="center" align="center">
							<Text w="80%" className={styles.description}>
								{props.description}
							</Text>
						</Flex>
					</Container>
				</Overlay>
				{previewContent}
				<Button variant="white" color="dark" component={Link} href={link}>
					View Project
				</Button>
			</Paper>
		</Card>
	);
}
export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
	const slides = projects.map((project) => (
		<Carousel.Slide key={project.title}>
			<ProjectCard {...project} />
		</Carousel.Slide>
	));
	return (
		<Carousel
			m="sm"
			p="sm"
			controlSize={40}
			slideSize={{ base: "100%", sm: "50%" }}
			slideGap={4}
			emblaOptions={{ align: "start", slidesToScroll: 1 }}
			nextControlProps={{
				"aria-label": "Next slide",
				style: { backgroundColor: "var(--color-background-secondary)" },
			}}
			previousControlProps={{
				"aria-label": "Previous slide",
				style: { backgroundColor: "var(--color-background-secondary)" },
			}}
		>
			{slides}
		</Carousel>
	);
}
