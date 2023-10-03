import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { BsGit } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

import {
	breakout,
	calculator,
	ecommerce,
	food,
	funrun,
	monster,
	nikeapp,
	piggame,
	portfolio,
	promptopia,
	threads,
} from '../assets';

const projects = [
	{
		image: threads,
		title: 'Threads Social Media',
		description: 'Nike Website using Tailwind CSS and React library with Vite',
		github: 'https://github.com/Mac-Jones/threads-app',
		demo: 'https://threads-app-liart.vercel.app/',
	},
	{
		image: nikeapp,
		title: 'Nike App',
		description: 'Nike Website using Tailwind CSS and React library with Vite',
		github: 'https://github.com/Mac-Jones/nike-app-tailwind',
		demo: 'https://nike-app-tailwind-css.netlify.app/',
	},
	{
		image: promptopia,
		title: 'Promptopia',
		description: 'Full-Stack App using nextjs',
		github: 'https://github.com/Mac-Jones/promptopia',
		demo: 'https://promptopia-cygqn8tia-mac-jones.vercel.app/',
	},

	{
		image: portfolio,
		title: '3D Portfolio Website',
		description:
			'3D portfolio website using Reactjs, Three.js and react-three/fiber',
		github: 'https://github.com/Mac-Jones/3D-portfolio',
		demo: 'https://mj-portfolio-3d.netlify.app',
	},

	{
		image: calculator,
		title: 'Calculator App',
		description: 'Simple Calculator App using React',
		github: 'https://github.com/Mac-Jones/react-calculator',
		demo: 'https://simple-calculator-reactjs-mj.netlify.app/',
	},

	{
		image: ecommerce,
		title: 'Mac Jones Store',
		description: 'E-Commerce App using React, TypeScript, Redux, etc',
		github: 'https://github.com/Mac-Jones/mac-jones-store',
		demo: 'https://mac-jones-store-reactjs-redux.netlify.app',
	},
	{
		image: monster,
		title: 'Monsters Rolodex',
		description: 'Search for Monster using React and Typescript',
		github: 'https://github.com/Mac-Jones/monster-rolodex',
		demo: 'https://monsters-rolodex-mj.netlify.app/',
	},

	{
		image: piggame,
		title: 'Pig Game',
		description: 'Pig Game using Javascript, HTML, and CSS',
		github: 'https://github.com/Mac-Jones/pig-game-javascript',
		demo: 'https://pig-game-mac-jones.netlify.app/',
	},
	{
		image: food,
		title: 'Recipe App',
		description: 'Food Recipe Website using Javascript',
		github: 'https://github.com/Mac-Jones/forkify-app',
		demo: 'https://recipe-app-macjones.netlify.app',
	},
	{
		image: breakout,
		title: 'Breakout',
		description: 'Javascript Game using HTML, CSS and Javascript',
		github: 'https://github.com/Mac-Jones/breakout-game-javascript',
		demo: 'https://breakout-macjones.netlify.app/',
	},

	{
		image: funrun,
		title: 'Fun Run Registration',
		description:
			'Capture form data, display it on a separate page using jQuery DataTables',
		github: 'https://github.com/Mac-Jones/gatsby-blog-mj',
		demo: 'https://macjones-blog.netlify.app',
	},
];

const technologies = [
	{
		name: 'Nextjs',
		icon: SiNextdotjs,
		color: '#1a202c',
	},
	{
		name: 'React',
		icon: GrReactjs,
		color: '#61dafb',
	},
	{
		name: 'Tailwindcss',
		icon: SiTailwindcss,
		color: ' #38B2AC',
	},
	{
		name: 'Nodejs',
		icon: FaNodeJs,
		color: '#3c873a',
	},
	{
		name: 'HTML5',
		icon: SiHtml5,
		color: '#e34c26',
	},
	{
		name: 'CSS3',
		icon: SiCss3,
		color: '#1572b6',
	},
	{
		name: 'Javascript',
		icon: SiJavascript,
		color: '#f7df1e',
	},
	{
		name: 'Sass',
		icon: SiSass,
		color: '#cd6799',
	},

	{
		name: 'Git',
		icon: BsGit,
		color: '#f05032',
	},
	{
		name: 'GitHub',
		icon: BsGithub,
		color: '#181717',
	},
	{
		name: 'Typescript',
		icon: SiTypescript,
		color: '#007acc',
	},
	{
		name: 'Graphql',
		icon: SiGraphql,
		color: '#e535ab',
	},
	{
		name: 'Gatsby',
		icon: SiGatsby,
		color: '#744c9e',
	},
	{
		name: 'ReactNative',
		icon: TbBrandReactNative,
		color: '#61dafb',
	},
];

export { technologies, projects };
