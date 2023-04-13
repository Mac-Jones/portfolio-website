import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

// import MJLogo from '../../img/mj-logo-transparent.png';
import MJLogo from '../../img/mj-logo-primary-transparent.png';

import './sidebar.styles.scss';

const Sidebar = () => {
	const navRef = useRef();

	const showNavBar = () => {
		console.log('haha');
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<div className='sidebar'>
			<img src={MJLogo} alt='Mac Jones Logo' className='sidebar__logo' />
			<nav ref={navRef}>
				<a href='/#'>Home</a>
				<a href='/#'>Story</a>
				<a href='/#'>Skills</a>
				<a href='/#'>Projects</a>
				<a href='/#'>Footer</a>
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
