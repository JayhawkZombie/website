import React from "react";
import styles from "./page.module.scss";
import { Container, Title } from "@mantine/core";

export default function Page({}) {
	return (
		<Container className={styles.main}>
			<Title>{"Hi"}</Title>
		</Container>
	);
}
