import React from "react";
import styles from "./ZoomieUnderline.module.scss";

export interface ZoomieUnderlineProps {
	children: React.ReactNode;
	/** CSS color for the pulse (default: Mantine blue) */
	color?: string;
	/** Animation duration in seconds (default: 2) */
	duration?: number;
	className?: string;
	/** HTML element to render as (default: span) */
	as?: keyof JSX.IntrinsicElements;
}

export function ZoomieUnderline({
	children,
	color,
	duration = 2,
	className,
	as: Component = "span",
}: ZoomieUnderlineProps) {
	return (
		<Component
			className={[styles.wrapper, className].filter(Boolean).join(" ")}
			style={
				{
					...(color && { "--zoomie-color": color }),
					...(duration && { "--zoomie-duration": `${duration}s` }),
				} as React.CSSProperties
			}
		>
			{children}
		</Component>
	);
}
