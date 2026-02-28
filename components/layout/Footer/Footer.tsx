import React from "react";
import { Container, Text, Group, Anchor } from "@mantine/core";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
	return (
		<footer className={styles.main}>
			<Container size="xl" py="xl">
				<Group justify="space-between" align="center">
					<Text size="sm" c="dimmed">
						© {new Date().getFullYear()} Kurt Slagle. All rights reserved.
					</Text>
					<Group gap="md">
						<Anchor href="https://github.com/JayhawkZombie" size="sm" c="dimmed">
							GitHub
						</Anchor>
						<Anchor href="https://linkedin.com/in/kurtslagle/" size="sm" c="dimmed">
							LinkedIn
						</Anchor>
						<Anchor href="mailto:kurt_slagle@yahoo.com" size="sm" c="dimmed">
							Contact
						</Anchor>
					</Group>
				</Group>
			</Container>
		</footer>
	);
};
