import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/Navbar';

import Home from './components/home/Home';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Home />
		</div>
	);
}

export default App;
