import React from "react";
import { Container, Text, Title } from "@mantine/core";
import styles from "./page.module.scss";
import { EffectPreviewCanvas } from "@/components/effect-preview/EffectPreviewCanvas";

export default function Resume() {
	return (
		<Container className={styles.main}>
			<Title order={1}>Resume</Title>
			<EffectPreviewCanvas />
		</Container>
	);
}
