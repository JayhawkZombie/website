import React from "react";
import { Container, Text, Title } from "@mantine/core";
import styles from "./page.module.scss";
import { EffectPreviewCanvas } from "@/components/effect-preview/EffectPreviewCanvas";
import ResumeCardSummary from "@/components/ui/resume/ResumeCardSummary";

export default function Resume() {
	return (
		<Container className={styles.main}>
			<Title order={1}>Resume</Title>
			<ResumeCardSummary
				title="Web Assembly"
				summary="Running the C++ code from SRDriver on the browser"
			>
				<EffectPreviewCanvas />
			</ResumeCardSummary>
		</Container>
	);
}
