import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Otp from "./Components/Login/Otp";
import Images from "./Components/Home/Images";
import News from "./Components/News/index";
import StudentPoint from "./Components/StudentPoint";
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer";
import StudentLogin from "./Components/Login/StudentLogin";
import OfficialLogin from "./Components/Login/OfficialLogin";

function App() {
	return (
		<div>
			<Images/>
			<Navbar/>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/loginstudent" element={<StudentLogin />} />
					<Route path="/loginofficials" element={<OfficialLogin />} />
					<Route path="/otp" element={<Otp />} />
					<Route path="/news" element={<News />} />
					<Route path="/studentPoint" element={<StudentPoint />} />
				</Routes>
			</Router>
			<br/><br/>
			<Footer/>
		</div>
	);
}

export default App;
