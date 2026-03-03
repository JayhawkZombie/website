import React from "react";
import styles from "./ZoomieUnderline.module.scss";

export interface ZoomieUnderlineProps {
	children: React.ReactNode;
	/** CSS color for the pulse (default: Mantine blue). Ignored when rainbow is true. */
	color?: string;
	/** Animation duration in seconds (default: 2) */
	duration?: number;
	/** Use shared strobe-rainbow hue animation for the underline (uses styles/animations.scss) */
	rainbow?: boolean;
	className?: string;
	/** HTML element to render as (default: span) */
	as?: keyof JSX.IntrinsicElements;
}

export function ZoomieUnderline({
	children,
	color,
	duration = 2,
	rainbow = false,
	className,
	as: Component = "span",
}: ZoomieUnderlineProps) {
	return (
		<Component
			className={[styles.wrapper, rainbow && styles.rainbow, className].filter(Boolean).join(" ")}
			style={
				{
					...(color && !rainbow && { "--zoomie-color": color }),
					...(duration && { "--zoomie-duration": `${duration}s` }),
				} as React.CSSProperties
			}
		>
			{children}
		</Component>
	);
}
