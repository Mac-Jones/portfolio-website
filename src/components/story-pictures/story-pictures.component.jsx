import img1 from '../../img/story-background-graduation.jpg';
import img2 from '../../img/story-background-mountain.jpg';

import './story-pictures.styles.scss';

const StoryPictures = () => {
	return (
		<div className='story__pictures' id='story'>
			<img src={img1} className='story__img--1' alt='story-img-mountain' />
			<img src={img2} className='story__img--2' alt='story-img-graduation' />
		</div>
	);
};

export default StoryPictures;
