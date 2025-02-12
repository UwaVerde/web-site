import { Header } from './components/header';
import { LeadCapture } from 'sections/LeadCapture';
import { HorizontalCards } from 'sections/HorizontalCards';
import { Spacer } from 'components/spacer';
import { OurValues } from 'sections/OurValues';
import { ImageSection } from 'sections/ImageSection';
import { FeaturedNews } from 'sections/FeaturedNews';
import { Comments } from 'sections/coments';
import { ClimateIsChanging } from 'sections/ClimateIsChanging';
import { Hero } from 'sections/Hero';
import { WhatWeDo } from 'sections/WhatWeDo';
import { Newsletter } from 'sections/Newsletter';
import { Footer } from 'components/footer';
import { OurProjects } from 'sections/OurProjects';
import Silvia from "assets/images/Silvia.png"
import { Teste } from 'sections/teste';

function App() {
	return (
		<div style={{ overflowX: '-moz-hidden-unscrollable' }}>
			<Header />
			<Hero />
			<LeadCapture />
			<Spacer height='600px' />
			<WhatWeDo />
			<Spacer height='304px' />
			<HorizontalCards />
			<Spacer height='168px' />
			<OurValues />
			<Teste />
			<Spacer height='158px' />
			<ImageSection />
			<Spacer height='180px' />
			<OurProjects />
			<Spacer height='180px' />
			<FeaturedNews />
			<Spacer height='197px' />
			<Comments comment={`"Learn as you grow, grow as you learn – That's what UwaVerde offers. It's a chance to be part of a meaningful effort for a sustainable future, while simultaneously growing knowledge and skills through collaborative learning."`} commentatorName='Silvia Prodanova' commentatorPosition='CCO' profilePhoto={Silvia} />
			<Spacer height='200px' />
			<ClimateIsChanging />
			{/* <Spacer height='70px' /> */}
			<Newsletter />
			<Footer />
		</div>
	);
}

export default App;
