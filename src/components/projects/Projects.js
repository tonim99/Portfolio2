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
			<CardDeck>
				{projects.map((project, i) => (
					<Card key={i}>
						<Card.Header>{project.Title}</Card.Header>
						<Card.Body>
							<Card.Text>{project.Description}</Card.Text>
							<Card.Img src={project.Image} />
							<Container fluid>
								<Row>
									<Col>
										<Button onClick={() => console.log('go to repo')}>Repo</Button>
									</Col>
									<Col>
										<Button onClick={() => console.log('go to project')}>
											Project
										</Button>
									</Col>
								</Row>
							</Container>
						</Card.Body>
					</Card>
				))}
			</CardDeck>
		</Container>
	);
}
