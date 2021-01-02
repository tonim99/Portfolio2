import React, { useEffect, useState } from 'react';
import './Projects.scss';
import { Button, Spinner } from 'react-bootstrap';
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
		<div className='project__container'>
			{projects.map((project, i) => (
				<div className='project__card' key={i}>
					<h3 className='project__card-title'>{project.Title}</h3>
					<p className='project__card-text'>{project.Description}</p>
					<img
						className='project__card-img'
						src={project.Image}
						alt='project'
					/>
					<div className='project__container-btn-grp'>
						<Button
							className='btn btn--sq'
							href={project.FeRepoLink}
							target='_blank'
							rel='noreferrer'>
							<Tooltip
								background='#fff'
								color='#000'
								padding='5'
								placement='top'
								radius='2'
								content='See Front-End Repo'>
								<FontAwesomeIcon icon={faGithub} size='1x' color='white' />
							</Tooltip>
						</Button>
						{project.BeRepoLink ? (
							<Button
								href={project.BeRepoLink}
								target='_blank'
								rel='noreferrer'>
								<Tooltip
									background='#fff'
									color='#000'
									padding='5'
									placement='top'
									radius='2'
									content='See Back-End Repo'>
									<FontAwesomeIcon icon={faCode} size='1x' color='white' />
								</Tooltip>
							</Button>
						) : null}
						<Button href={project.ProjectLink} target='_blank' rel='noreferrer'>
							<Tooltip
								background='#fff'
								color='#000'
								padding='5'
								placement='top'
								radius='2'
								content='Visit Website'>
								<FontAwesomeIcon
									icon={faExternalLinkAlt}
									size='1x'
									color='white'
								/>
							</Tooltip>
						</Button>
					</div>
				</div>
			))}
		</div>
	);
	return projects.length > 0 ? (
		loaded()
	) : (
		<Spinner animation='border' role='status'>
			<span className='sr-only'>Loading...</span>
		</Spinner>
	);
}
