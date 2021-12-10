import React from "react";
import Navbar from "../Navbar/Navbar";
import Images from "./Images";
import main from "../../Images/MainImage.png";
import "./style.css";
export default function Home() {
	return (
		<div>
			<Images />
			<Navbar />
			<div className="home">
				<div>
					<div className="home-text">
						<h1>Lorem Ipsum Text</h1>
						<div className="home-text-cont">
							<div></div>
							<p>
								At vero eos et accusamus et iusto odio dignissimos ducimus qui
								blandit praesentium voluptatum delis atque corrupti quos dolores
							</p>
						</div>
						<button>Get Started</button>
					</div>
				</div>
				<div className="main-image">
					<img src={main} alt="MainImage" />
				</div>
			</div>
		</div>
	);
}
