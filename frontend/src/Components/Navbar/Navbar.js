import React, { useEffect, useState } from "react";
import "./style.css";

export default function Navbar() {
	const [isHam,setHam] = useState(false);
	useEffect(()=>{
		if(window.innerWidth < 600){
			setHam(true);
		}
	},[])
	return (
		
		<div>
			<div className="navbar-el">
				<div className="hamburger" onClick={()=>{
					setHam(!isHam)
				}}>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div style={{display:isHam ? "none" : ""}}>
					<ul>
						<li>Home</li>
						<li>Student's Point</li>
						<li>Login</li>
						<li>News</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
