import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer'
import Contact from './components/Contact';
function App() {
	return (
		<div className='App'>
			<NavBar />
			<Home />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
