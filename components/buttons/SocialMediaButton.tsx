import React from "react";
import { ActionIcon, Button } from "@mantine/core";
import { IconBrandTwitter } from "@tabler/icons-react";
import Link from "next/link";

type SocialMediaButtonProps = {
	href: string;
	icon: React.ReactNode;
	label: string;
};

export default function SocialMediaButton(props: SocialMediaButtonProps) {
	return (
		<ActionIcon variant="subtle" size="lg" title={props.label}>
			<Link href={props.href}>{props.icon}</Link>
		</ActionIcon>
	);
}
