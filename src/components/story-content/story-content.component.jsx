import './story-content.styles.scss';

const StoryContent = () => {
	return (
		<div className='story__content'>
			<h3 className='heading-3 mb-sm'>A college dropout</h3>
			<h2 className='heading-2 heading-2--dark mb-md'>
				&ldquo;And now! A web developer enthusiast&rdquo;
			</h2>
			<p className='story__text'>
				I am Mac Jones Soriano, a Frontend Web Developer. When I finished my
				first year in College, I choose to became a dropout student. I switch
				from a degree of Mechanical Engineering and turn into my career path as
				a web developer.
			</p>

			<p className='story__text'>
				I found out that my skills are for programming especially in Web
				Development. In my two years of studying code, I think I'm ready to show
				this to the world. And now, I'm willing to serve others and to provide
				my valuable skills like building website applications, solving problems,
				finding best solution and more efficient code.
			</p>
			<button className='btn'>About Me</button>
		</div>
	);
};

export default StoryContent;
