import { Button } from 'components/buttons/button'
import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import { Spacer } from 'components/spacer'
import styles from "./styles.module.scss"

export function ClimateIsChanging() {
	return (
		<ContentSection sectionBackground='blackBackground'>
			<ContentContainer>
				<div className={styles.wrapper}>
					<h1 className={styles.firstMessage}>Climate is changing!</h1>
					<Spacer height='8px' />
					<h1 className={styles.secondMessage}>Are you?</h1>
					<Spacer height='24px' />
					<div className={styles.buttonWrapper}>
						<Button background='gradient' fontSize='medium' href='' spacing='mediumSpacing'>Join Our Mission</Button>
					</div>
				</div>
			</ContentContainer>
		</ContentSection>
	)
}

