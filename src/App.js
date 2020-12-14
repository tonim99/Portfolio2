import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects'
function App() {
	return (
		<div className='App'>
			<NavBar />
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
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
