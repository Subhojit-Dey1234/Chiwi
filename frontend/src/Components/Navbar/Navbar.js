import React, { useEffect, useRef, useState } from "react";
import "./style.css";
export default function Navbar() {
	const [isHam, setHam] = useState(true);
	const navEl = useRef(null);
	useEffect(() => {
		if (window.innerWidth < 700) {
			setHam(false);
		}
	}, []);
	return (
		<div>
<<<<<<< Updated upstream
=======
			<div>
				<a href="/" >
					<img src={logo} alt="logo" className="logo" />
				</a>
			</div>
>>>>>>> Stashed changes
			<div className="navbar-el">
				<div
					className="hamburger"
					onClick={() => {
						setHam(!isHam);
					}}
				>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div
					ref={navEl}
					className="navbar-list"
					style={{ visibility: isHam ? "visible" : "hidden" }}
				>
					<ul>
						<a href="/">
							<li>Home</li>
						</a>
						<a href="/studentPoint">
							<li>Student's Point</li>
						</a>
						<a href="/loginstudent">
							<li>
								Login <small style={{ opacity: 0.6 }}>( for students )</small>{" "}
							</li>
						</a>
						<a href="/loginofficials">
							<li>
								Login <small style={{ opacity: 0.6 }}> ( for officials )</small>
							</li>
						</a>
						<a href="/news">
							<li>News</li>
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
}
