import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

export default function NavBar() {
	return (
		<div className='header'>
			<div className='brand'>
				<Link to='/'>
					<h1>Tonimarie Morris</h1>
				</Link>
			</div>
			<div className='fa-bars'>
				<FontAwesomeIcon icon={faBars} size='2x' color='white' />
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
