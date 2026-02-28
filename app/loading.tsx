import React from "react";
import { Container, Text, Title } from "@mantine/core";
import styles from "./page.module.scss";

export default function Loading() {
	return (
		<Container className={styles.main}>
			<Title order={1}>Loading...</Title>
			<Text>Loading...</Text>
		</Container>
	);
}
