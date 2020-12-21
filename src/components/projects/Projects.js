import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Projects.scss';
import Tabletop from 'tabletop';
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
	return (
		<Container>
			<Row xs={1} sm={1} md={2} lg={2} xl={4}>
				{projects.map((project, i) => (
					<Col>
						<Card key={i}>
							{console.log(project.ProjectLink)}
							<Card.Header>{project.Title}</Card.Header>
							<Card.Body>
								<Card.Text>{project.Description}</Card.Text>
								<Card.Img src={project.Image} />
								<Container fluid>
									<a href={project.FeRepoLink} target='_blank' rel='noreferrer'>
										<Button>
											See Code{' '}
											<FontAwesomeIcon icon={faCode} size='1x' color='white' />
										</Button>
									</a>
									<a
										href={project.ProjectLink}
										target='_blank'
										rel='noreferrer'>
										<Button>
											Visit Website{' '}
											<FontAwesomeIcon
												icon={faExternalLinkAlt}
												size='1x'
												color='white'
											/>
										</Button>
									</a>
								</Container>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}
