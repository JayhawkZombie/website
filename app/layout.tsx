import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { MantineProviders } from "@/lib/mantine/provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.scss";
import styles from "./layout.module.scss";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Personal Website",
	description: "Personal website portfolio, blog, and resume",
};

const theme = createTheme({
	/** Put your mantine theme override here */
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
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
