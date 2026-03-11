"use client";
import React from "react";
import { Card, Text, Title } from "@mantine/core";
import styles from "./ResumeCardSummary.module.scss";

export type ResumeCardSummaryProps = {
	title: string;
	summary: string;
	children?: React.ReactNode;
};

export default function ResumeCardSummary(props: ResumeCardSummaryProps) {
	return (
		<Card className={styles.main}>
			<Title order={2}>{props.title}</Title>
			<Text>{props.summary}</Text>
			{props.children}
		</Card>
	);
}
