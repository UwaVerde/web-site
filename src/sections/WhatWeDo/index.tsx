import { useState } from 'react';
import { ContentSection } from 'components/contentSection';
import { ContentContainer } from 'components/contentSection/contentContainer';
import { StepTab, StepTabItem } from 'components/stepTab';
import { areasOfWorf } from './areasOfWork';
import styles from "./styles.module.scss"
import { Spacer } from 'components/spacer';

export function WhatWeDo() {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<div className={styles.desktopWrapper}>

					<div>
						<p className={`${styles.steps} ${activeTab === 0 ? styles.active : undefined}`} onClick={() => setActiveTab(0)}>What we do</p>
						<p className={`${styles.steps} ${activeTab === 1 ? styles.active : undefined}`} onClick={() => setActiveTab(1)}>Areas of work</p>
					</div>

					<div className={styles.tabs}>
						<StepTab activeTab={activeTab}>
							<StepTabItem>
								<p className={styles.stepsTexts}>
									We empower people to drive positive change through hands-on sustainability projects. We provide valuable resources, create opportunities for collaboration, and build a strong community focused on protecting the environment.
								</p>
							</StepTabItem>
							<StepTabItem>
								<div className={styles.stepsWrapper}>
									{areasOfWorf.map((item, index) => (
										<p className={styles.areasOfWorf} key={index}>
											{item.area}
										</p>
									))}

								</div>
							</StepTabItem>
						</StepTab>
					</div>

				</div>

				<div className={styles.mobileContent}>
					<div className={styles.mobileItem}>
						<p className={`${styles.steps} ${styles.active}`}>What we do</p>
						<p className={styles.stepsTexts}>
							We empower people to drive positive change through hands-on sustainability projects. We provide valuable resources, create opportunities for collaboration, and build a strong community focused on protecting the environment.
						</p>
					</div>
					<Spacer height='50px' />

					<div className={styles.mobileItem}>
						<p className={`${styles.steps} ${styles.active}`}>Areas of work</p>
						<div className={styles.stepsWrapper}>
							{areasOfWorf.map((item, index) => (
								<p className={styles.areasOfWorf} key={index}>
									{item.area}
								</p>
							))}

						</div>
					</div>
					<Spacer height='102px' />
				</div>

			</ContentContainer>
		</ContentSection>
	);
}
