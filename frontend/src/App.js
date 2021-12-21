import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home.js";
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
			</Routes>
		</Router>
	);
}

export default App;
