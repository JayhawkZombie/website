import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.scss";
import styles from "./layout.module.scss";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "@/lib/mantine/theme";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Personal Website",
	description: "Personal website portfolio, blog, and resume",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ColorSchemeScript defaultColorScheme="dark" />
			</head>
			<body className={inter.className + " " + styles.body}>
				<MantineProvider theme={theme} defaultColorScheme="dark">
					<Notifications />
					<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
						<Header />
						<main className={styles.main}>{children}</main>
						<Footer />
					</div>
				</MantineProvider>
			</body>
		</html>
	);
}
