import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Otp from "./Components/Login/Otp";
import Images from "./Components/Home/Images";
import EmailEnter from "./Components/Login/EmailEnter";
import News from "./Components/News/index";

function App() {
	return (
		<div>
			<Images />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<EmailEnter />} />
					<Route path="/otp" element={<Otp />} />
					<Route path="/news" element={<News />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
