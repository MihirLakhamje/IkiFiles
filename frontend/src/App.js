import { Container } from 'react-bootstrap';
import './App.css';
import Guest from './components/Guest';
import Header from './headerfooter/Header'


function App() {
	return (
		<>
		<Container style={{height:"100vh"}}>
			<Header />
			<Guest />
		</Container>
		</>
	);
}

export default App;
