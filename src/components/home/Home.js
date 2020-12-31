import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<header className='header'>
			<div className='header__statement-box'>
				<h1 className='heading-primary'>
					<span className='heading-primary--main'>Tonimarie Morris</span>
					<span className='heading-primary--sub'>
						Full-Stack Software Engineer
					</span>
				</h1>
				<Link to='/projects' className='btn btn--pink btn--animated'>
					See my work
				</Link>
			</div>
		</header>
	);
}
