import React from "react";
import { Container, Text, Title, Center, Stack } from "@mantine/core";
import styles from "./page.module.scss";
import ProjectCarousel from "@/components/ProjectCarousel";
import { ZoomieUnderline } from "@/components/ui";

export default function Portfolio() {
	const projects = [
		{
			imageUrl: "/portfolio/led_panels/twinkling_panels.jpg",
			title: "LED Display",
			description: "A custom LED display made with my partner.",
		},
		{
			imageUrl: "/portfolio/led_panels/led_flowers.jpg",
			title: "LED Flowers",
			description: "A flower arrangement with LEDs underneath to make it glow.",
		},
		{
			imageUrl: "/portfolio/led_panels/fiber_optic_canvas.jpg",
			title: "Fiber Optic Canvas",
			description: "A fiber optic canvas, with 1100+ dots and controllable regions.",
		},
	];

	return (
		<Container className={styles.main}>
			<Center>
				<Stack w="100%">
					<Center inline>
						<ZoomieUnderline rainbow>
							<Title order={1}>Portfolio</Title>
						</ZoomieUnderline>
					</Center>
					<ProjectCarousel projects={projects} />
				</Stack>
			</Center>
		</Container>
	);
}
