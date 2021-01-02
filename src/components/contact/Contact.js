import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import resume from '../../assets/resume/Morris Resume1121.pdf';

export default function Contact() {
	return (
		<div className='contact-container'>
			<div className='links-container'>
				<h2>GET IN TOUCH</h2>
				<div className='links-container-links'>
					<a
						className='link'
						href='https://www.linkedin.com/in/tonim99/'
						target='_blank'
						rel='noreferrer'>
						<FontAwesomeIcon icon={faLinkedin} size='2x' color='white' />
					</a>
					<a
						className='link'
						href='https://github.com/tonim99'
						target='_blank'
						rel='noreferrer'>
						<FontAwesomeIcon icon={faGithub} size='2x' color='white' />
					</a>
					<a className='link' href='mailto:morris.tonimarie@gmail.com'>
						<FontAwesomeIcon icon={faEnvelope} size='2x' color='white' />
					</a>
					<a
						className='link'
						href='https://twitter.com/TonimarieMorri1'
						target='_blank'
						rel='noreferrer'>
						<FontAwesomeIcon icon={faTwitter} size='2x' color='white' />
					</a>
					<a className='link' href={resume} target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faFileDownload} size='2x' color='white' />
					</a>
				</div>
			</div>
		</div>
	);
}
