import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
export default function NavBar() {
	return (
		<div className='header'>
			<div className='brand'>
				<Link to='/'>
					<h1>Tonimarie Morris</h1>
				</Link>
			</div>
			<div className='page-links'>
				<div>
					<Link to='/about'>
						<p>About</p>
					</Link>
				</div>
				<div>
					<Link to='/projects'>
						<p>Projects</p>
					</Link>
				</div>
				<div>
					<Link to='/contact'>
						<p>Contact</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
