import React, { useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Menu from './components/menu/Menu';
import About from './components/about/About';

function App() {
	const [showMenu, setShowMenu] = useState(false);
	const clickHandler = () => setShowMenu(!showMenu);
	return (
		<div className='App'>
			{/* <NavBar clickHandler={clickHandler} />
			{showMenu ? <Menu /> : null} */}
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/contact'>
					<Contact />
				</Route>
				<Route exact path='/projects'>
					<Projects />
				</Route>
				<Route exact path='/about'>
					<About />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
