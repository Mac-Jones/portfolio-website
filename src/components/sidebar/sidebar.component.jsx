import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

// import MJLogo from '../../img/mj-logo-transparent.png';
import MJLogo from '../../img/mj-logo-primary-transparent.png';

import './sidebar.styles.scss';

const Sidebar = () => {
	const navRef = useRef();

	const showNavBar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<div className='sidebar'>
			<img src={MJLogo} alt='Mac Jones Logo' className='sidebar__logo' />
			<nav ref={navRef}>
				<a href='/#header' onClick={showNavBar}>
					Home
				</a>
				<a href='/#story' onClick={showNavBar}>
					Story
				</a>
				<a href='/#skills' onClick={showNavBar}>
					Skills
				</a>
				<a href='/#projects' onClick={showNavBar}>
					Projects
				</a>
				<a href='/#footer' onClick={showNavBar}>
					Footer
				</a>
				<button className='nav-btn nav-close-btn'>
					<FaTimes onClick={showNavBar} />
				</button>
			</nav>
			<button className='nav-btn'>
				<FaBars onClick={showNavBar} />
			</button>
		</div>
	);
};

export default Sidebar;
