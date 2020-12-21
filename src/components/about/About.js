import React from 'react';
import './About.scss';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../../../src/assets/images/portfolio-pic.jpg';
import resume from '../../assets/resume/MorrisResumeFinal.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
	// faHtml5,
	// faCss3,
	faBootstrap,
	faSass,
	faReact,
	faJs,
	// faNode,
	// faNpm,
	// faYarn,
	// faGit,
} from '@fortawesome/free-brands-svg-icons';
export default function About() {
	return (
		<Container className='aboutContainer'>
			<Row xs={1} md={2}>
				<Col>
					<img src={image} alt='profile' className='profile' />
				</Col>
				<Col>
					<h2>About Me</h2>
					<p>
						Hello! I'm Tonimarie, an account manager turned software engineer. I
						live in the beautiful Shenandoah Valley in central Virginia with my
						two Akitas and drink copious amounts of coffee while creating
						applications for the web. In my spare time, I front a band called
						Blues Soup and a duo called Fourth Street Manor. I also volunteer as
						the Secretary of the local Democratic Committee.
					</p>
				</Col>

				<Container className='techContainer'>
					<Row>
						<Col>
							<h3>Some Technologies I use</h3>
							<p>
								This is just a sample, please reach out if you don't see what
								you're looking for.
							</p>

							{/* <FontAwesomeIcon icon={faHtml5} size='2x' color='black' />
				<FontAwesomeIcon icon={faCss3} size='2x' color='black' /> */}
							<FontAwesomeIcon icon={faJs} size='2x' color='black' />
							<FontAwesomeIcon icon={faReact} size='2x' color='black' />
							<FontAwesomeIcon icon={faBootstrap} size='2x' color='black' />
							<FontAwesomeIcon icon={faSass} size='2x' color='black' />
							<FontAwesomeIcon icon={faDatabase} size='2x' color='black' />
							{/* <FontAwesomeIcon icon={faNode} size='2x' color='black' /> */}
							{/* <FontAwesomeIcon icon={faNpm} size='2x' color='black' />
				<FontAwesomeIcon icon={faYarn} size='2x' color='black' />
            <FontAwesomeIcon icon={faGit} size='2x' color='black' /> */}
						</Col>
					</Row>
				</Container>
				<Container className='resumeContainer'>
					<Row>
						<Col>
							<h4>Download Resume</h4>
							<a href={resume} target='_blank' rel='noreferrer'>
								<FontAwesomeIcon icon={faFilePdf} size='2x' color='black' />
							</a>
						</Col>
					</Row>
				</Container>
			</Row>
		</Container>
	);
}
