import Calculator from '../../img/calculator.jpg';

import Ecommerce from '../../img/ecommerce.jpg';
import PersonalBlog from '../../img/personal-blog.png';
import PigGame from '../../img/pig-game.png';
import Food from '../../img/food.png';
import Breakout from '../../img/breakout-game.png';

import './projects.styles.scss';

const projectsData = [
	{
		id: 1,
		image: Calculator,
		title: 'Calculator App',
		description: 'Simple Calculator App using React',
		github: 'https://github.com/Mac-Jones/react-calculator',
		demo: 'https://simple-calculator-reactjs-mj.netlify.app/',
	},
	{
		id: 2,
		image: Ecommerce,
		title: 'Crown Clothing',
		description: 'E-Commerce App using React, TypeScript, Redux, etc',
		github: 'https://github.com/Mac-Jones/Crown-Clothing',
		demo: 'https://crown-clothing-reactjs.netlify.app/',
	},
	{
		id: 3,
		image: PersonalBlog,
		title: 'My Personal Blog',
		description: 'Simple Blog using Gatsby',
		github: 'https://github.com/Mac-Jones/gatsby-blog-mj',
		demo: 'https://macjones-blog.netlify.app',
	},

	{
		id: 4,
		image: PigGame,
		title: 'Pig Game',
		description: 'Pig Game using Javascript, HTML, and CSS',
		github: 'https://github.com/Mac-Jones/pig-game-javascript',
		demo: 'https://pig-game-mac-jones.netlify.app/',
	},
	{
		id: 5,
		image: Food,
		title: 'Recipe App',
		description: 'Food Recipe Website using Javascript',
		github: 'https://github.com/Mac-Jones/forkify-app',
		demo: 'https://recipe-app-macjones.netlify.app',
	},
	{
		id: 6,
		image: Breakout,
		title: 'Breakout',
		description: 'Javascript Game using HTML, CSS and Javascript',
		github: 'https://github.com/Mac-Jones/breakout-game-javascript',
		demo: 'https://breakout-macjones.netlify.app/',
	},
];

const ProjectsData = () => {
	return (
		<div className='projects'>
			{projectsData.map((project) => {
				const { id, image, title, description, github, demo } = project;
				return (
					<div className='project' key={id}>
						<img src={image} className='project__img' alt={`Portfolio ${id}`} />

						<h5 className='project__name'>{title}</h5>

						<div className='project__description'>{description}</div>

						<div className='project__cta-container'>
							<a
								href={github}
								className='btn-2 project__btn'
								target='_blank'
								rel='noreferrer'
							>
								Github
							</a>
							<a
								href={demo}
								className='btn-2 project__btn'
								target='_blank'
								rel='noreferrer'
							>
								Live Demo
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectsData;
