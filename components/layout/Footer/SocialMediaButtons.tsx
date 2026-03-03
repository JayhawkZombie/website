import React from "react";
import { Group } from "@mantine/core";
import SocialMediaButton from "@/components/buttons/SocialMediaButton";
import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconMail,
	IconBrandTwitter,
} from "@tabler/icons-react";

export default function SocialMediaButtons() {
	return (
		<Group gap="md">
			<SocialMediaButton
				href="https://twitter.com/kurt_slagle"
				icon={<IconBrandTwitter size={18} />}
				label="Twitter"
			/>
			<SocialMediaButton
				href="https://github.com/JayhawkZombie"
				icon={<IconBrandGithub size={18} />}
				label="GitHub"
			/>
			<SocialMediaButton
				href="https://linkedin.com/in/kurtslagle"
				icon={<IconBrandLinkedin size={18} />}
				label="LinkedIn"
			/>
			<SocialMediaButton
				href="mailto:kurt_slagle@yahoo.com"
				icon={<IconMail size={18} />}
				label="Email"
			/>
		</Group>
	);
}
