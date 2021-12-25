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
			{/* <div>
				<a href="/" >
					<img src={logo} alt="logo" className="logo" />
				</a>
			</div> */}
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
						<a href="/" style={{textDecoration:"none", color:"black"}}>
							<li>Home</li>
						</a>
						<a href="/studentPoint" style={{textDecoration:"none", color:"black"}}>
							<li>Student's Point</li>
						</a>
						<a href="/loginstudent" style={{textDecoration:"none", color:"black"}}>
							<li>
								Login <small style={{ opacity: 0.6 }}>( Students )</small>{" "}
							</li>
						</a>
						<a href="/loginofficials" style={{textDecoration:"none", color:"black"}}>
							<li>
								Login <small style={{ opacity: 0.6 }}> ( Officials )</small>
							</li>
						</a>
						<a href="/news" style={{textDecoration:"none", color:"black"}}>
							<li>News</li>
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
}
