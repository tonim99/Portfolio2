import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
	return (
		<div className='side-bar'>
			<Link to='/'>
				<p>Home</p>
			</Link>

			<Link to='/about'>
				<p>About</p>
			</Link>

			<Link to='/projects'>
				<p>Projects</p>
			</Link>

			<Link to='/contact'>
				<p>Contact</p>
			</Link>
		</div>
	);
}
