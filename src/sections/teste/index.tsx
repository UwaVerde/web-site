import { AccordionTest } from 'components/accordion2/accordionTest';
import { ContentSection } from 'components/contentSection';
import { ContentContainer } from 'components/contentSection/contentContainer';

const items = [
	{
		title: 'Seção 1',
		content: 'Conteúdo da seção 1. Aqui você pode adicionar texto, imagens ou outros componentes.',
	},
	{
		title: 'Seção 2',
		content: 'Conteúdo da seção 2. Este é outro exemplo de conteúdo expansível.',
	},
	{
		title: 'Seção 3',
		content: 'Conteúdo da seção 3. O Accordion é uma ótima maneira de organizar informações.',
	},
];


export function Teste() {
	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<AccordionTest items={items} />
			</ContentContainer>
		</ContentSection>
	);
}
