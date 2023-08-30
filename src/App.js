import Skills from './components/skills/skills.component';
import StoryContent from './components/story-content/story-content.component';
import StoryPictures from './components/story-pictures/story-pictures.component';
import Projects from './components/projects/projects.component';
import Footer from './components/footer/footer.component';
import Contact from './components/contact/contact.component';
import Navigation from './components/sidebar/navigation.component';
import Header from './components/header/header.component';
import Socials from './components/socials/socials.component';
import './sass/main.scss';

function App() {
	return (
		<div className='container'>
			<Navigation />
			<Header />
			<Socials />
			<StoryPictures />
			<StoryContent />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
