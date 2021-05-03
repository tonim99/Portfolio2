import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

export default function Menu({ hideMenu }) {
	return (
		<div className='drop-menu'>
			<div className='drop-menu-container'>
				<Link className='drop-menu-link' to='/about' onClick={hideMenu}>
					About
				</Link>
				<Link className='drop-menu-link' to='/portfolio' onClick={hideMenu}>
					Portfolio
				</Link>
				<Link className='drop-menu-link' to='/contact' onClick={hideMenu}>
					Contact
				</Link>
			</div>
		</div>
	);
}
