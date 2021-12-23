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
						<a href="/login">
							<li>Login</li>
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
