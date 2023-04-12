import './socials.styles.scss';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Socials = () => {
	return (
		<div className='socials'>
			<ul className='social__list'>
				<a
					href='https://www.linkedin.com/in/mac-jones-soriano-273056164/'
					target='_blank'
					rel='noreferrer'
				>
					<BsLinkedin className='social__icon social__icon-linkedin' />
				</a>
				<a href='https://github.com/Mac-Jones' target='_blank' rel='noreferrer'>
					<FaGithub className='social__icon social__icon-github' />
				</a>
				<a
					href='https://www.facebook.com/mjonessoriano/'
					target='_blank'
					rel='noreferrer'
				>
					<BsFacebook className='social__icon social__icon-facebook' />
				</a>
				<a
					href='https://www.instagram.com/mahc_jownzzz'
					target='_blank'
					rel='noreferrer'
				>
					<BsInstagram className='social__icon social__icon-instagram' />
				</a>
			</ul>
		</div>
	);
};

export default Socials;
