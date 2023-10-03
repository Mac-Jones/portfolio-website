import { technologies } from '../../constants';

import './skills.styles.scss';

const Skills = () => {
	return (
		<section className='skills-section' id='skills-section'>
			<h1>My Skills</h1>
			<div className='skills-container'>
				{technologies.map((technology) => (
					<div className='skill' key={technology.name}>
						<technology.icon
							className='skill__icon skill__icon-html'
							style={{ color: technology.color }}
						/>
						<h4 className='heading-4 skill__title'>{technology.name}</h4>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
