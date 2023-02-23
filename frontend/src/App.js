
import './App.css';
import Guest from './components/Guest';
import Header from './headerfooter/Header'
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";


function App() {
	return (
		<>
			<Header />
			<Router>

			<Routes>
				<Route exact path='/' element={<Guest/>}/>
			</Routes>
			</Router>
		</>
	);
}

export default App;
