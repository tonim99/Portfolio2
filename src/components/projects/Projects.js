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
			<Row xs={1} sm={1} md={1} lg={4} xl={5}>
				{projects.map((project, i) => (
					<Card key={i}>
						<Card.Header>{project.Title}</Card.Header>
						<Card.Body>
							<Card.Text>{project.Description}</Card.Text>
							<Card.Img src={project.Image} />
							<Container fluid>
								<Button onClick={() => console.log('go to repo')}>
									See Code{' '}
									<FontAwesomeIcon icon={faCode} size='1x' color='white' />
								</Button>
								<Button onClick={() => console.log('go to project')}>
									Visit Website{' '}
									<FontAwesomeIcon
										icon={faExternalLinkAlt}
										size='1x'
										color='white'
									/>
								</Button>
							</Container>
						</Card.Body>
					</Card>
				))}
			</Row>
		</Container>
	);
}
