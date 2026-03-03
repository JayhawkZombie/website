"use client";

import { useMantineColorScheme } from "@mantine/core";
import { useEffect } from "react";

/**
 * Syncs the "dark" class on <html> with Mantine's color scheme
 * so our CSS variables (:root.dark) apply and body/text get the right colors.
 */
export function ThemeSync() {
	const { colorScheme } = useMantineColorScheme();

	useEffect(() => {
		const root = document.documentElement;
		if (colorScheme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	}, [colorScheme]);

	return null;
}
