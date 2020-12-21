import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import image from '../../assets/images/hero-lg.jpg';
export default function Home() {
	return (
		<div className='about'>
			<img src={image} alt='coding' className='hero' />
			<div className='statementDiv'>
				<p className='statement'>
					{' '}
					I'm Tonimarie, a detail-oriented full-stack developer who values collaboration
					and has an insatiable hunger for knowledge. I create clean,
					responsive, user-first applications optimized for mobile and web.
					<Link to='/projects'>
						<p className='underline'>See my Work</p>
					</Link>
				</p>
			</div>
		</div>
	);
}
