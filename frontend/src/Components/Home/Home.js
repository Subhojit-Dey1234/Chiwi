import React from "react";
import Navbar from "../Navbar/Navbar";
import Images from "./Images";
import main from "../../Images/MainImage.png";
import "./style.css";
import { Row, Col, Button } from "reactstrap";

export default function Home() {
  return (
    <div>
      <Images />
      <br />
      <Row
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: "5%",
        }}
      >
        <Col sm="6">
          <h1 style={{ color: "#727dbd", fontWeight: "bold" }}>
            Lorem Ipsum Text
          </h1>
          <p style={{ borderLeft: "4px solid #727dbd", padding: "2%" }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blandit praesentium voluptatum delis atque corrupti quos dolores
          </p>
          <Button
            style={{
              backgroundColor: "#727dbd",
              color: "white",
              border: "none",
            }}
          >
            Get Started
          </Button>
          <br />
        </Col>
        <Col sm="6">
          <br />
          <img src={main} alt="MainImage" style={{ width: "100%" }} />
        </Col>
      </Row>
      {/* <div className="home">
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
			</div> */}
    </div>
  );
}
