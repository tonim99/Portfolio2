import React from 'react';
import './About.scss';
import image from '../../../src/assets/images/portfolio-pic.jpg';
export default function About() {
	return (
		<div className='aboutContainer'>
			<img src={image} alt='profile' className='profile' />
            <h2>About Me</h2>
            <p>Tonimarie is an account manager turned software engineer. She lives in the beautiful Shenandoah Valley in central Virginia with her two Akitas, and drinks copious amounts of coffee while creating applications for the web. In her spare time, she fronts a band called Blues Soup and a duo called Fourth Street Manor. She also volunteers as the Secretary of the local Democratic Committee.</p>
		</div>
	);
}
