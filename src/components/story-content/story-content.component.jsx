import './story-content.styles.scss';

const StoryContent = () => {
	return (
		<div className='story__content'>
			<h3 className='heading-3 mb-sm'>About</h3>
			<h2 className='heading-2 heading-2--dark mb-md'>
				&ldquo;Full Stack Developer&rdquo;
			</h2>
			<p className='story__text'>
				I am Mac Jones Soriano, a Frontend Web Developer. When I finished my
				first year in College, I choose to became a dropout student. I switch
				from a degree of Mechanical Engineering and turn into my career path as
				a web developer.
			</p>

			<p className='story__text'>
				I've discovered that my passion lies in programming, especially in web
				development. I'm eager to showcase my skills to the world and serve
				others by offering my expertise in building web applications, solving
				complex problems, finding optimal solutions, and crafting efficient
				code.
			</p>
			<button className='btn'>About Me</button>
		</div>
	);
};

export default StoryContent;
