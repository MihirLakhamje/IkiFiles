import { Container } from 'react-bootstrap';
import './App.css';
import Guest from './components/Guest';
import Header from './headerfooter/Header'
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Dashboard from './components/Dashboard';


function App() {
	return (
		<>
		<Container style={{height:"100vh"}}>
			<Header />
			<Router>

			<Routes>
				<Route exact path='/' element={<Guest/>}/>
				<Route path='/dashboard' element={<Dashboard/>}/>
			</Routes>
			</Router>
		</Container>
		</>
	);
}

export default App;
