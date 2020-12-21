import React, { useEffect, useState } from 'react';
import './Projects.scss';
import { Card, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Tabletop from 'tabletop';
import Tooltip from 'react-simple-tooltip';

export default function Projects() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		Tabletop.init({
			key: '1d9tAR6r3q7A2SO38rbpBBUalOPZsBfiCq7v8kriYtbM',
			simpleSheet: true,
		})
			.then((data) => setProjects(data))
			.catch((err) => console.warn(err));
	}, []);
	const loaded = () => (
		<Container>
			<Row xs={1} md={2} xl={4}>
				{projects.map((project, i) => (
					<Col>
						<Card key={i}>
							<Card.Header>{project.Title}</Card.Header>
							<Card.Body>
								<Card.Text>{project.Description}</Card.Text>
								<Card.Img src={project.Image} />
								<Container>
									<Row>
										<a
											href={project.FeRepoLink}
											target='_blank'
											rel='noreferrer'>
											<Tooltip
												background='var(--raisin-black)'
												color='var(--whitish)'
												padding='5'
												placement='bottom'
												radius='2'
												content='See Front-End Repo'>
												<Button>
													<FontAwesomeIcon
														icon={faGithub}
														size='1x'
														color='white'
													/>
												</Button>
											</Tooltip>
										</a>
										{project.BeRepoLink ? (
											<a
												href={project.BeRepoLink}
												target='_blank'
												rel='noreferrer'>
												<Tooltip
													background='var(--raisin-black)'
													color='var(--whitish)'
													padding='5'
													placement='bottom'
													radius='2'
													content='See Back-End Repo'>
													<Button>
														<FontAwesomeIcon
															icon={faCode}
															size='1x'
															color='white'
														/>
													</Button>
												</Tooltip>
											</a>
										) : null}
										<a
											href={project.ProjectLink}
											target='_blank'
											rel='noreferrer'>
											<Tooltip
												background='var(--raisin-black)'
												color='var(--whitish)'
												padding='5'
												placement='bottom'
												radius='2'
												content='Visit Website'>
												<Button>
													<FontAwesomeIcon
														icon={faExternalLinkAlt}
														size='1x'
														color='white'
													/>
												</Button>
											</Tooltip>
										</a>
									</Row>
								</Container>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>)
	return projects.length > 0 ? (
		loaded()
	) : (
		<Spinner animation='border' role='status'>
			<span className='sr-only'>Loading...</span>
		</Spinner>
	);
}
