import React from "react";
import { Container, Text, Group } from "@mantine/core";
import styles from "./Footer.module.scss";
import SocialMediaButtons from "./SocialMediaButtons";

export const Footer: React.FC = () => {
	return (
		<footer className={styles.main}>
			<Container size="xl" py="xl">
				<Group justify="center" align="center" w="100%">
					<Text size="sm" c="dimmed">
						© {new Date().getFullYear()} Kurt Slagle. All rights reserved.
					</Text>
					<SocialMediaButtons />
				</Group>
			</Container>
		</footer>
	);
};
