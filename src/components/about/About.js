import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
	faBootstrap,
	faSass,
	faReact,
	faJs,
} from '@fortawesome/free-brands-svg-icons';
import image from '../../../src/assets/images/portfolio-pic.jpg';
import resume from '../../assets/resume/Morris Resume1121.pdf';

export default function About() {
	return (
		<>
			<Container className='about'>
				<Row xs={1} md={2}>
					<Col md={{ order: 2 }}>
						{/* <div className='about__box'></div> */}
						<img src={image} alt='profile' className='about__img' />
					</Col>
					<Col className='about__content' md={{ order: 1 }}>
						<h2 className='heading-secondary'>About Me</h2>
						<p>
							Hello! I'm Tonimarie. I am a full-stack software engineer, based
							in the beautiful Shenandoah Valley, who is meticulous in her work
							and scrutinizes it from a user's perspective to ensure quality.
						</p>
						<p>
							Previously, I worked in consultative sales and account management;
							now I use the skills I gained to collaborate effectively with
							clients and colleagues in order to provide mutually beneficial
							solutions. Challenging work sparks my creativity. I excel in a
							rapidly changing organization, and am loath to accept "this is how
							we've always done it."
						</p>
						<p>
							When I'm not developing your next application or expanding my
							skill set, I'm volunteering locally, spending time with my two
							Akitas, or singing with the band Blues Soup and the duo 4th Street
							Manor.
						</p>
						<div className='buttons'>
							<a
								href={resume}
								target='_blank'
								rel='noreferrer'
								className='btn btn--sq'>
								My Resume &rarr;
							</a>
							<Link to='/Contact' className='btn btn--sq'>
								Contact Me &rarr;
							</Link>
						</div>
						{/* <div className='buttons transparent'>
							<a
								href={resume}
								target='_blank'
								rel='noreferrer'
								className='btn btn--sq'>
								Resume
							</a>
							<Link to='/Contact' className='btn btn--sq'>
								Contact
							</Link>
						</div> */}
						{/* <div className='about__box'></div> */}
						<Col className='tech' md={{ order: 3 }}>
							<h3>Some Technologies I use</h3>
							<FontAwesomeIcon
								className='icon'
								icon={faJs}
								size='2x'
								color='black'
							/>
							<FontAwesomeIcon
								className='icon'
								icon={faReact}
								size='2x'
								color='black'
							/>
							<FontAwesomeIcon
								className='icon'
								icon={faBootstrap}
								size='2x'
								color='black'
							/>
							<FontAwesomeIcon
								className='icon'
								icon={faSass}
								size='2x'
								color='black'
							/>
							<FontAwesomeIcon
								className='icon'
								icon={faDatabase}
								size='2x'
								color='black'
							/>
						</Col>
					</Col>
				</Row>
			</Container>
		</>
	);
}
