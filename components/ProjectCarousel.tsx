"use client";

import { Carousel } from "@mantine/carousel";
import { Button, Card, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./ProjectCarousel.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type CardProps = {
	imageUrl: string;
	title: string;
	description: string;
	link: string;
};

type ProjectCarouselProps = {
	projects: CardProps[];
};

function ProjectCard(props: CardProps) {
	const link = `/portfolio/${props.link}`;
	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			style={{ backgroundImage: `url(${props.imageUrl})` }}
			className={styles.card}
		>
			<div>
				<Text className={styles.category} size="xs">
					{props.title}
				</Text>
				<Title order={3} className={styles.title}>
					{props.title}
				</Title>
			</div>
			<Button variant="white" color="dark" component={Link} href={link}>
				View Project
			</Button>
		</Paper>
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
			slideSize={{ base: "100%", sm: "50%" }}
			slideGap={4}
			emblaOptions={{ align: "start", slidesToScroll: 1 }}
			nextControlProps={{ "aria-label": "Next slide" }}
			previousControlProps={{ "aria-label": "Previous slide" }}
		>
			{slides}
		</Carousel>
	);
}
