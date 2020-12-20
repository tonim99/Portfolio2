import React from 'react';
import './About.scss';
import image from '../../../src/assets/images/portfolio-pic.jpg';
export default function About() {
	return (
		<div className='aboutContainer'>
			<img src={image} alt='profile' className='profile' />
            <h2>About Me</h2>
            
		</div>
	);
}
