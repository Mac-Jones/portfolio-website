import { useRef, useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import MJLogo from '../../img/mj-logo-primary-transparent.png';

import './navigation.styles.scss';

const Navigation = () => {
	const navRef = useRef();
	const [isNavigationVisible, setIsNavigationVisible] = useState(false);

	// const [isNavBarVisible, setIsNavBarVisible] = useState(false);

	// const toggleNavContainer = () => {
	// 	if (isNavBarVisible) {
	// 		navRef.current.classList.remove('show-navigation');
	// 	} else {
	// 		navRef.current.classList.add('show-navigation');
	// 	}
	// 	setIsNavBarVisible(!isNavBarVisible);
	// };

	const toggleNavContainer = () => {
		navRef.current.classList.toggle('show-navigation');
	};

	const highlightActiveSectionLink = () => {
		const sectionElements = document.querySelectorAll(
			'#story-section, #header-section, #skills-section, #projects-section'
		);

		sectionElements.forEach((section) => {
			const sectionId = section.getAttribute('id');
			const navigationLink = document.querySelector(
				`[data-target='${sectionId}']`
			);

			if (
				section.getBoundingClientRect().top <= 100 &&
				section.getBoundingClientRect().bottom > 100
			) {
				navigationLink.classList.add(`active`);
			} else {
				navigationLink.classList.remove(`active`);
			}
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsNavigationVisible(true);
			} else {
				setIsNavigationVisible(false);
			}

			highlightActiveSectionLink();
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={isNavigationVisible ? 'navbar' : 'navbar-hidden'}>
			<img src={MJLogo} alt='Mac Jones Logo' className='navbar__logo' />
			<nav className='nav-container' ref={navRef}>
				<a
					href='#header-section'
					className='nav-link'
					data-target='header-section'
					onClick={toggleNavContainer}
				>
					Home
				</a>
				<a
					href='#story-section'
					className='nav-link'
					data-target='story-section'
					onClick={toggleNavContainer}
				>
					Story
				</a>
				<a
					href='#skills-section'
					className='nav-link'
					data-target='skills-section'
					onClick={toggleNavContainer}
				>
					Skills
				</a>
				<a
					href='#projects-section'
					className='nav-link'
					data-target='projects-section'
					onClick={toggleNavContainer}
				>
					Projects
				</a>
				<button className='nav-btn nav-close-btn'>
					<FaTimes onClick={toggleNavContainer} />
				</button>
			</nav>
			<button className='nav-btn'>
				<FaBars onClick={toggleNavContainer} />
			</button>
		</div>
	);
};

export default Navigation;

// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useRef } from 'react';
// import { Link } from 'react-scroll';

// import MJLogo from '../../img/mj-logo-primary-transparent.png';

// import './sidebar.styles.scss';

// const Sidebar = () => {
// 	const navRef = useRef();

// 	const showNavBar = () => {
// 		navRef.current.classList.toggle('responsive_nav');
// 	};

// 	return (
// 		<div className='sidebar'>
// 			<img src={MJLogo} alt='Mac Jones Logo' className='sidebar__logo' />
// 			<nav ref={navRef}>
// 				<Link to='header' onClick={showNavBar}>
// 					Home
// 				</Link>
// 				<Link to='story' onClick={showNavBar}>
// 					Story
// 				</Link>
// 				<Link to='skills' onClick={showNavBar}>
// 					Skills
// 				</Link>
// 				<Link to='projects' onClick={showNavBar}>
// 					Projects
// 				</Link>
// 				<Link to='footer' onClick={showNavBar}>
// 					Footer
// 				</Link>
// 				<button className='nav-btn nav-close-btn'>
// 					<FaTimes onClick={showNavBar} />
// 				</button>
// 			</nav>
// 			<button className='nav-btn'>
// 				<FaBars onClick={showNavBar} />
// 			</button>
// 		</div>
// 	);
// };

// export default Sidebar;
