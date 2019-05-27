import React from 'react';
import {
	BrowserRouter as Router, 
	Route,
	Switch
} from 'react-router-dom'
import logo from './logo.svg';
import { Home } from '../src/spa';
import './App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<img src={logo} className="App-logo" alt="logo" /> 
					<p>Fake Company LTDA</p>
				</div>
			</header>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					{/* <Route path="/justify" component={Justify} />
					<Route path="/complete" component={ThankYou} />
					<Route path="*" component={NotFound} /> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;