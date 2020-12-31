import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({ clickHandler }) {
	return (
		<header className='header'>
			<div className='header__brand-box'>
				<Link className='header__link' to='/'>
					TM
				</Link>
			</div>
			<div className='fa-bars'>
				<FontAwesomeIcon
					icon={faBars}
					size='2x'
					color='white'
					onClick={clickHandler}
				/>
			</div>
			{/* <div className='page-links'>
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
			</div> */}
		</header>
	);
}
