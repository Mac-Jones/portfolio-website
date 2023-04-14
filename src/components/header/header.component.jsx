import MJLogo from '../../img/mj-logo-primary-transparent.png';

import Resume from '../../img/mac-jones-resume.pdf';

import './header.styles.scss';

const Header = () => {
	return (
		<header className='header' id='header'>
			<img src={MJLogo} alt='Mac Jones Logo' className='header__logo' />

			<h1 className='heading-1'>Mac Jones Soriano</h1>
			<div className='header__paragraph'>Frontend Developer</div>
			<div className='header__button-container'>
				<a href={Resume} download className='btn header__btn'>
					Download Resume
				</a>
				<a href='#contact' className='btn-transparent header__btn'>
					Let's talk
				</a>
			</div>
		</header>
	);
};

export default Header;
