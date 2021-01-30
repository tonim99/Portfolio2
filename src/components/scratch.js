<>
	<Container className='about'>
		<Row xs={1} md={2}>
			<Col md={{ order: 2 }}>
				<img src={image} alt='profile' className='about__img' />
			</Col>
			<Col className='about__content' md={{ order: 1 }}>
				<h2 className='heading-secondary heading-secondary--main'>About Me</h2>
				<p>
					Hello! I'm Tonimarie. I am a full-stack software engineer, based in
					the beautiful Shenandoah Valley, who is meticulous in her work and
					scrutinizes it from a user's perspective to ensure quality.
				</p>
				<p>
					Previously, I worked in consultative sales and account management; now
					I use the skills I gained to collaborate effectively with clients and
					colleagues in order to provide mutually beneficial solutions.
					Challenging work sparks my creativity. I excel in a rapidly changing
					organization, and am loath to accept "this is how we've always done
					it."
				</p>
				<p>
					When I'm not developing your next application or expanding my skill
					set, I'm volunteering locally, spending time with my two Akitas, or
					singing with the band Blues Soup and the duo 4th Street Manor.
				</p>
				<div className='buttons'>
					<Link to='/Contact' className='btn btn--sq'>
						Contact Me &rarr;
					</Link>
					<a
						href={resume}
						target='_blank'
						rel='noreferrer'
						className='btn btn--sq'>
						My Resume &rarr;
					</a>
				</div>

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
</>;
