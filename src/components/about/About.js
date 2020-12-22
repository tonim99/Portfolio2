import React from 'react';
import './About.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
	faBootstrap,
	faSass,
	faReact,
	faJs,
} from '@fortawesome/free-brands-svg-icons';
import image from '../../../src/assets/images/portfolio-pic.jpg';
import resume from '../../assets/resume/MorrisResumeFinal.pdf';

export default function About() {
	return (
		<Container className='aboutContainer'>
			<Row xs={1} md={2}>
				<Col className='profile' md={{ order: 2 }}>
					<img src={image} alt='profile' />
				</Col>
				<Col md={{ order: 1 }}>
					<h2>About Me</h2>
					<p>
						Hello! I'm Tonimarie. I am an account manager turned full-stack
						software engineer, with an insatiable hunger for knowledge. I live
						in the beautiful Shenandoah Valley in central Virginia with my two
						Akitas, and I drink copious amounts of coffee while creating
						applications for the web.
					</p>
					<p>
						My extensive consultative sales and account management experience
						has given me the ability to collaborate with clients and teammates
						to ensure that we reach win-win solutions.
					</p>
					<p>
						In my spare time, I sing with a band called Blues Soup and a duo
						called 4th Street Manor. I also volunteer as Secretary of the local
						Democratic Committee.
					</p>
					<a href={resume} target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faFilePdf} size='2x' color='black' />
						<p>Download my Resume</p>
					</a>
				</Col>
			</Row>
			<Row>
				<Col>
					<h3>Some Technologies I use</h3>
					<p>
						This is just a sample, please reach out if you don't see what you're
						looking for.
					</p>
					<FontAwesomeIcon icon={faJs} size='2x' color='black' />
					<FontAwesomeIcon icon={faReact} size='2x' color='black' />
					<FontAwesomeIcon icon={faBootstrap} size='2x' color='black' />
					<FontAwesomeIcon icon={faSass} size='2x' color='black' />
					<FontAwesomeIcon icon={faDatabase} size='2x' color='black' />
				</Col>
			</Row>
		</Container>
	);
}
