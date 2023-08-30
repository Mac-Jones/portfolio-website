import React from 'react';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

import './skills.styles.scss';

const Skills = () => {
	return (
		<section className='skills-section' id='skills-section'>
			<h1>My Skills</h1>
			<div className='skills-container'>
				<div className='skill'>
					<SiHtml5 className='skill__icon skill__icon-html' />
					<h4 className='heading-4 skill__title'>HTML5</h4>
				</div>
				<div className='skill'>
					<SiCss3 className='skill__icon skill__icon-css' />
					<h4 className='heading-4 skill__title'>CSS3</h4>
				</div>
				<div className='skill'>
					<SiJavascript className='skill__icon skill__icon-javascript' />
					<h4 className='heading-4 skill__title'>JavaScript</h4>
				</div>
				<div className='skill'>
					<SiSass className='skill__icon skill__icon-sass' />
					<h4 className='heading-4 skill__title'>Sass</h4>
				</div>
				<div className='skill'>
					<GrReactjs className='skill__icon skill__icon-react' />
					<h4 className='heading-4 skill__title'>React</h4>
				</div>

				<div className='skill'>
					<BsGit className='skill__icon skill__icon-git' />
					<h4 className='heading-4 skill__title'>Git</h4>
				</div>
				<div className='skill'>
					<BsGithub className='skill__icon skill__icon-github' />
					<h4 className='heading-4 skill__title'>GitHub</h4>
				</div>
				<div className='skill'>
					<SiTypescript className='skill__icon skill__icon-typescript' />
					<h4 className='heading-4 skill__title'>TypeScript</h4>
				</div>
				<div className='skill'>
					<SiGraphql className='skill__icon skill__icon-graphql' />
					<h4 className='heading-4 skill__title'>Graphql</h4>
				</div>
				<div className='skill'>
					<SiGatsby className='skill__icon skill__icon-gatsby' />
					<h4 className='heading-4 skill__title'>Gatsby</h4>
				</div>
				<div className='skill'>
					<TbBrandReactNative className='skill__icon skill__icon-react-native' />
					<h4 className='heading-4 skill__title'>React Native</h4>
				</div>
				<div className='skill'>
					<FaNodeJs className='skill__icon skill__icon-nodejs' />
					<h4 className='heading-4 skill__title'>Node.js</h4>
				</div>
			</div>
		</section>
	);
};

export default Skills;
