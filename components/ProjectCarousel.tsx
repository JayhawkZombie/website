import { Carousel } from "@mantine/carousel";
import { Button, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./ProjectCarousel.module.scss";

type CardProps = {
	imageUrl: string;
	title: string;
};
