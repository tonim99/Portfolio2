import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<header className='header'>
			<div className='brand-box'>
				<Link className='link' to='/'>
					<h1 className='brand'>TM</h1>
				</Link>
			</div>
			<div className='statement-box'>
				<h1 className='heading-primary'>
					<span className='heading-primary-main'>Tonimarie Morris</span>
					<span class='heading-primary-sub'>Full-Stack Software Engineer</span>
				</h1>
				<Link to='/projects' className='btn btn-pink'>
					See my work
				</Link>
			</div>
		</header>
	);
}
