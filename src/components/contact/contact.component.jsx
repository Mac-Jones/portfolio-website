import React, { useState } from 'react';
import './contact.styles.scss';
import { TbBrandGmail } from 'react-icons/tb';
import { SiMessenger } from 'react-icons/si';
import { RiWhatsappFill } from 'react-icons/ri';

import { useForm } from '@formspree/react';

const Contact = () => {
	const defaultInputTypes = {
		name: '',
		email: '',
		message: '',
	};

	const [state, handleSubmit] = useForm('mwkjnkal');
	const [defaulInput, setDefaultInput] = useState(defaultInputTypes);
	const { name, email, message } = defaulInput;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setDefaultInput({ ...defaulInput, [name]: value });
	};

	if (state.succeeded) {
		return (
			<section id='contact' className='contact'>
				<div className='contact__header'>
					<h1>Contact Me</h1>
				</div>
				<div className='contact__container'>
					<div className='contact__options'>
						<article className='contact__option'>
							<TbBrandGmail className='contact__option-gmail contact__option-icon' />
							<h4>Email</h4>
							<h5>sorianomacjones@gmail.com</h5>
							<a
								href='mailto:sorianomacjones@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								Send a message
							</a>
						</article>

						<article className='contact__option'>
							<SiMessenger className='contact__option-messenger contact__option-icon' />
							<h4>Messenger</h4>
							<h5>Mac Jones Soriano</h5>
							<a
								href='https://m.me/mjonessoriano'
								target='_blank'
								rel='noreferrer'
							>
								Send a message
							</a>
						</article>

						<article className='contact__option'>
							<RiWhatsappFill className='contact__option-whatsapp contact__option-icon' />
							<h4>WhatsApp</h4>
							<h5>09157904885</h5>
							<a
								href='https://api.whatsapp.com/send?phone=09157904885'
								target='_blank'
								rel='noreferrer'
							>
								Send a message
							</a>
						</article>
					</div>

					<form className='contact__form' onSubmit={handleSubmit}>
						<input
							type='text'
							name='name'
							placeholder='Your Full Name'
							value=''
							// value={name}
							onChange={handleChange}
							required
						/>
						<input
							type='email'
							name='email'
							placeholder='Your Email'
							value=''
							// value={email}
							onChange={handleChange}
							required
						/>
						<textarea
							name='message'
							rows='10'
							placeholder='Your Message'
							value=''
							onChange={handleChange}
							required
						></textarea>
						<button type='submit' className='btn contact__btn' disabled>
							Send Message
						</button>
					</form>
				</div>
			</section>
		);
	}
	// ==================
	return (
		<section id='contact' className='contact'>
			<div className='contact__header'>
				<h1 className='heading-1 '>Contact Me</h1>
			</div>

			<div className=' contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<TbBrandGmail className='contact__option-gmail contact__option-icon' />
						<h4>Email</h4>
						<h5>sorianomacjones@gmail.com</h5>
						<a
							href='mailto:sorianomacjones@gmail.com'
							target='_blank'
							rel='noreferrer'
						>
							Send a message
						</a>
					</article>

					<article className='contact__option'>
						<SiMessenger className='contact__option-messenger contact__option-icon' />
						<h4>Messenger</h4>
						<h5>Mac Jones Soriano</h5>
						<a
							href='https://m.me/mjonessoriano'
							target='_blank'
							rel='noreferrer'
						>
							Send a message
						</a>
					</article>

					<article className='contact__option'>
						<RiWhatsappFill className='contact__option-whatsapp contact__option-icon' />
						<h4>WhatsApp</h4>
						<h5>09157904885</h5>
						<a
							href='https://api.whatsapp.com/send?phone=09157904885'
							target='_blank'
							rel='noreferrer'
						>
							Send a message
						</a>
					</article>
				</div>

				<form className='contact__form' onSubmit={handleSubmit}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						value={name}
						onChange={handleChange}
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Your Email'
						value={email}
						onChange={handleChange}
						required
					/>
					<textarea
						name={message}
						rows='10'
						placeholder='Your Message'
						onChange={handleChange}
						required
					></textarea>
					<button
						type='submit'
						className='btn contact__btn'
						disabled={state.submitting}
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
