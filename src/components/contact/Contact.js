import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
export default function Contact() {
	return (
		<div className='contact-container'>
			<h2>GET IN TOUCH</h2>
			<div className='links-container'>
				<a
					href='https://www.linkedin.com/in/tonimarie-morris-50a010104/'
					target='_blank'
					rel='noreferrer'>
					<FontAwesomeIcon icon={faLinkedin} size='2x' color='white' />
				</a>
				<a href='https://github.com/tonim99' target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={faGithub} size='2x' color='white' />
				</a>
				<a href='mailto:morris.tonimarie@gmail.com'>
					<FontAwesomeIcon icon={faEnvelope} size='2x' color='white' />
				</a>
				<a
					href='https://twitter.com/TonimarieMorri1'
					target='_blank'
					rel='noreferrer'>
					<FontAwesomeIcon icon={faTwitter} size='2x' color='white' />
				</a>
			</div>
		</div>
	);
}
