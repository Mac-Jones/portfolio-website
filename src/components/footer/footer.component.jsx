// import { Element } from 'react-scroll';
import './footer.styles.scss';

const Footer = () => {
	return (
		<footer className='footer' id='footer'>
			{/* <h1 className='heading-1'>MacJones</h1> */}
			<ul className='nav'>
				<li className='nav__item'>
					<a href='#header-section' className='nav__link'>
						Home
					</a>
				</li>

				<li className='nav__item'>
					<a href='#story-section' className='nav__link'>
						Story
					</a>
				</li>
				<li className='nav__item'>
					<a href='#skills-section' className='nav__link'>
						Skills
					</a>
				</li>
				<li className='nav__item'>
					<a href='#projects-section' className='nav__link'>
						Projects
					</a>
				</li>
				<li className='nav__item'>
					<a href='#contacts-section' className='nav__link'>
						Contact
					</a>
				</li>
			</ul>

			<p className='copyright'>&copy; Copyright 2023 by Mac Jones Soriano</p>
		</footer>
	);
};

export default Footer;
