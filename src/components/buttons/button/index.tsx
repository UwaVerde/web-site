import { CSSProperties, FC } from 'react'
import styles from "./styles.module.scss"

type ButtonProps = {
	children: React.ReactNode;
	href: string;
	targetBlank?: boolean;
	background: 'purple' | 'outlined' | 'gradient' | 'white'
	fontSize: 'small' | 'medium'
	spacing: 'smallSpacing' | 'mediumSpacing' | 'bigSpacing'
	style?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({ children, href, background, targetBlank, fontSize, spacing, style }) => {
	return (
		<a style={style} href={href} target={targetBlank ? "_blank" : undefined} rel="noreferrer" className={`${styles.button} ${styles[background]} ${styles[fontSize]} ${styles[spacing]}`}>{children}</a>
	)
}
