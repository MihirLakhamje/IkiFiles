
import './App.css';
import Guest from './components/Guest';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import User from './components/User';


function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<Guest/>}/>
					<Route path='/user/*' element={<User/>}/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
