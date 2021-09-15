import React, { useEffect, useState } from 'react';
import './Projects.scss';
import { Spinner } from 'react-bootstrap';
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
	// console.log(projects, 'projects')
	const loaded = () => (
		<>
			<h2 className='heading-secondary heading-secondary--main margin-top-md'>
				Portfolio
			</h2>
			<div className='project__container'>
				{projects.map((project, i) => (
					<div className='project__grid'>
						<img
							src={project.Image}
							alt='project'
							className='project__grid-img'
						/>
						<div className='content__container'>
							<h3 className='heading-tert'>{project.Title}</h3>
							<p className='content'>{project.Description}</p>
							<h4 className='heading-four'>Tech Used</h4>
							<p className='content-sub'>{project.SkillsUsed}</p>
							<div className='btn-grp'>
								{project.ProjectLink ? (
									<Tooltip
										background='#fff'
										color='#000'
										padding='5'
										placement='top'
										radius='2'
										content='Visit Website'>
										<a
											href={project.ProjectLink}
											className='btn btn--sq'
											target='_blank'
											rel='noreferrer'>
											<FontAwesomeIcon icon={faExternalLinkAlt} size='1x' />
										</a>
									</Tooltip>
								) : null}
								{project.FeRepoLink ? (
									<Tooltip
										background='#fff'
										color='#000'
										padding='5'
										placement='top'
										radius='2'
										content='See Front-End Repo'>
										<a
											href={project.FeRepoLink}
											className='btn btn--sq'
											target='_blank'
											rel='noreferrer'>
											<FontAwesomeIcon
												icon={faGithub}
												size='1x'
												color='white'
											/>
										</a>
									</Tooltip>
								) : null}
								{project.BeRepoLink ? (
									<Tooltip
										background='#fff'
										color='#000'
										padding='5'
										placement='top'
										radius='2'
										content='See Back-End Repo'>
										<a
											href={project.BeRepoLink}
											className='btn btn--sq'
											target='_blank'
											rel='noreferrer'>
											<FontAwesomeIcon icon={faCode} size='1x' color='white' />
										</a>
									</Tooltip>
								) : null}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
	return projects.length > 0 ? (
		loaded()
	) : (
		<div className='spinner-container'>
			{/* <Spinner className='spinner' animation='border' role='status'>
				<span className='sr-only'>Loading...</span>
			</Spinner> */}
			<p className='construction'>Page under construction. Please check back later.</p>
		</div>
	);
}
