import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
// import image from '../../assets/images/hero-img-bw.png'

export default function Home() {
	return (
		<header className='header'>
			{/* <img src={image} alt='coding' className='hero' /> */}
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
				<a href='/projects' className='btn btn-pink btn-animated'>
					See my work
				</a>
			</div>
		</header>
	);
}
