import './projects.styles.scss';
import { projects } from '../../constants';

const Projects = () => {
	return (
		<section className='projects-container' id='projects-section'>
			<h1>Projects</h1>
			<div className='projects'>
				{projects.map((project) => {
					const { image, title, description, github, demo } = project;
					return (
						<div className='project' key={project.title}>
							<img
								src={image}
								className='project__img'
								alt={`Portfolio ${project.title}`}
							/>

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
		</section>
	);
};

export default Projects;
