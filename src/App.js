import React, { useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import NavBar from './components/navbar/Navbar';
// import Construction from './components/construction/Construction';
const url = 'https://cdn.contentful.com'
const spaceID = process.env.API_SPACE_ID
const REACT_APP_API_KEY = `${process.env.REACT_APP_API_KEY}`
fetch(`${url}/spaces/${spaceID}/entries?access_token=${REACT_APP_API_KEY}&content_type=project`).then((response)=>{
    console.log(response)
	// return response.json()
})
export default function App() {
	const [showMenu, setShowMenu] = useState(false);
	const clickHandler = () => {
		setShowMenu(!showMenu);
	};
	const hideMenu = () => (showMenu ? setShowMenu(!showMenu) : null);
	return (
		<div className='App'>
			<NavBar clickHandler={clickHandler} hideMenu={hideMenu} />
			{showMenu ? <Menu hideMenu={hideMenu} /> : null}
			<Switch>
				<Route exact path='/'>
					{showMenu ? null : <Home />}
				</Route>
				<Route exact path='/contact'>
					{showMenu ? null : <Contact />}
				</Route>
				<Route exact path='/portfolio'>
					{showMenu ? null : <Projects />}
				</Route>
				{/* <Route exact path='/portfolio'>
					{showMenu ? null : <Construction />}
				</Route> */}
				<Route exact path='/about'>
					{showMenu ? null : <About />}
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}
