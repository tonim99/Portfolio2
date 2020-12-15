import React, { useEffect, useState } from 'react';
import { Card, Button, CardDeck, Container, Row, Col } from 'react-bootstrap';
import './Projects.scss';
import Tabletop from 'tabletop';
export default function Projects() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		Tabletop.init({
			key: '1uwFmEbEq4zu9XBAsp9m57i4uShA2Ug9H9tCpOr8I43U',
			simpleSheet: true,
		})
			.then((data) => setProjects(data))
			.catch((err) => console.warn(err));
	}, []);
	return (
		<Container>
			{projects.map((project, i) => (
				<Card key={i}>
					<Card.Header>{project.Title}</Card.Header>
					<Card.Body>
						<Card.Text>{project.Description}</Card.Text>
						<Card.Img src={project.Image} />
						<Container>
							<Row>
								<Col>
									<Button onClick={() => console.log('go to repo')}>
										GitHub Repository
									</Button>
								</Col>
								<Col>
									<Button onClick={() => console.log('go to project')}>
										Live Project
									</Button>
								</Col>
							</Row>
						</Container>
					</Card.Body>
				</Card>
			))}
		</Container>
	);
}
