import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({ clickHandler, hideMenu }) {
	return (
		<nav className='nav'>
			<div className='nav__brand-box'>
				<Link className='nav__brand-box-link' to='/' onClick={hideMenu}>
					TM
				</Link>
			</div>
			<div className='nav__fa-bars-box' onClick={clickHandler}>
				<FontAwesomeIcon
					className='fa-bars'
					icon={faBars}
					size='3x'
					color='black'
				/>
			</div>
		</nav>
	);
}
