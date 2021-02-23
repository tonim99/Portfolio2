import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<footer className='footer'>
			<a
				href='https://www.linkedin.com/in/tonim99/'
				target='_blank'
				rel='noreferrer'>
				<FontAwesomeIcon
					className='icon'
					icon={faLinkedin}
					size='3x'
					color='white'
				/>
			</a>
			<a href='https://github.com/tonim99' target='_blank' rel='noreferrer'>
				<FontAwesomeIcon
					className='icon'
					icon={faGithub}
					size='3x'
					color='white'
				/>
			</a>
			<a href='mailto:morris.tonimarie@gmail.com'>
				<FontAwesomeIcon
					className='icon'
					icon={faEnvelope}
					size='3x'
					color='white'
				/>
			</a>
			<a
				href='https://twitter.com/TonimarieMorri1'
				target='_blank'
				rel='noreferrer'>
				<FontAwesomeIcon
					className='icon'
					icon={faTwitter}
					size='3x'
					color='white'
				/>
			</a>
		</footer>
	);
}
