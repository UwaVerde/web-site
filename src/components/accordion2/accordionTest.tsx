import React, { useState } from 'react';
import styles from "./styles.module.scss"

// Definindo a interface para os itens do Accordion
interface AccordionItem {
	title: string;
	content: string;
}

// Definindo as props do componente Accordion
interface AccordionProps {
	items: AccordionItem[];
}

export const AccordionTest: React.FC<AccordionProps> = ({ items }) => {
	// Estado para controlar qual item está expandido
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	// Função para alternar a expansão de um item
	const handleClick = (index: number) => {
		if (activeIndex === index) {
			return setActiveIndex(null)
		}
		setActiveIndex(index)
	};

	return (
		<div className={styles.accordion}>
			{items.map((item, index) => (
				<div key={index} className={styles.accordionItem}>
					<div
						className={styles.accordionTitle}
						onClick={() => handleClick(index)}
					>
						{item.title}
						<span className={styles.accordionIcon}>
							{activeIndex === index ? '-' : '+'}
						</span>
					</div>

					<div className={`${styles.accordionContent} ${activeIndex === index ? styles.open : ''}`}>
						<div className={`${styles.contentText}  ${activeIndex === index ? styles.open : ''}`}>
							{item.content}</div>
					</div>

				</div>
			))}
		</div>
	);
};

