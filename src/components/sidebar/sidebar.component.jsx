import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

// import MJLogo from '../../img/mj-logo-transparent.png';
import MJLogo from '../../img/mj-logo-primary-transparent.png';

import './sidebar.styles.scss';

const Sidebar = () => {
	const navRef = useRef();

	const showNavBar = () => {
		console.log(navRef.current);
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<div className='sidebar'>
			<img src={MJLogo} alt='Mac Jones Logo' className='sidebar__logo' />
			<nav ref={navRef}>
				<a href='#header' onClick={showNavBar}>
					Home
				</a>
				<a href='#story' onClick={showNavBar}>
					Story
				</a>
				<a href='#skills' onClick={showNavBar}>
					Skills
				</a>
				<a href='#projects' onClick={showNavBar}>
					Projects
				</a>
				<a href='#footer' onClick={showNavBar}>
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
