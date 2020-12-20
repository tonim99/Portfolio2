import React from 'react';
import './Home.scss';
import image from '../../assets/images/hero-lg.jpg';
export default function Home() {
	return (
		<div className='about'>
			<img src={image} alt='coding' className='hero' />
			<div className='statementDiv'>
				<p className='statement'>
					{' '}
					I am a detail-oriented Full-Stack developer who values collaboration and has an insatiable hunger for knowledge. I create clean, responsive, user-first applications optimized for mobile and web. 
				</p>
			</div>
		</div>
	);
}
