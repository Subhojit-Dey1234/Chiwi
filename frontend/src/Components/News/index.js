import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardGroup,
	Button,
} from "reactstrap";
import logo from "../../Images/news.png";
import { Row, Col } from "reactstrap";
const Example = (props) => {
	return (
		<div>
			<br />
			<br />
			<br />
			<h2 style={{ textAlign: "left", margin: "3% 5%", fontWeight: "bolder" }}>
				Get Latest News!
			</h2>
			<Card
				style={{ textAlign: "left", boxShadow: "2px grey", margin: "3% 5%" }}
			>
				<Row>
					<Col sm="3">
						<CardImg
							width="auto"
							height="100%"
							src={logo}
							alt="Card image cap"
						/>
					</Col>
					<Col sm="9">
						<CardBody className="news-card">
							<CardTitle tag="h5">Project title</CardTitle>
							<p>Prof. Richard Feyman | Department of Physics</p>
							<CardText>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</CardText>
							<Button style={{ backgroundColor: "#7882BD" }}>Read More</Button>
						</CardBody>
					</Col>
				</Row>
			</Card>
			<br />
			<div style={{ padding: "3% 5%" }}>
				<h2 style={{ textAlign: "left", fontWeight: "bolder" }}>
					Some Blogs For You
				</h2>
				<p style={{ textAlign: "left" }}>
					Learn more about research in the other IITs
				</p>
				<CardGroup style={{ padding: "3% 0%" }}>
					<Card style={{ margin: "0 1%", border: "none" }}>
						<CardImg top width="10%" src={logo} alt="Card image cap" />
						<CardBody style={{ padding: "1rem 0" }}>
							<CardTitle tag="h6">
								Flying high with the best drone tech : The inspiring tale of
								Urban Matrix
							</CardTitle>
							<Button style={{ backgroundColor: "#7882BD" }}>Read More</Button>
						</CardBody>
					</Card>
					<Card style={{ margin: "0 1%", border: "none" }}>
						<CardImg top width="10%" src={logo} alt="Card image cap" />
						<CardBody style={{ padding: "1rem 0" }}>
							<CardTitle tag="h6">
								Dioxane: A Harmful Pollutant and the Search for its Sensor
							</CardTitle>
							<Button style={{ backgroundColor: "#7882BD" }}>Read More</Button>
						</CardBody>
					</Card>
					<Card style={{ margin: "0 1%", border: "none" }}>
						<CardImg top width="10%" src={logo} alt="Card image cap" />
						<CardBody style={{ padding: "1rem 0" }}>
							<CardTitle tag="h6">
								Breaking a Virus 2: COVIRAP and where it goes from here
							</CardTitle>
							<Button style={{ backgroundColor: "#7882BD" }}>Read More</Button>
						</CardBody>
					</Card>
				</CardGroup>
			</div>
		</div>
	);
};

export default Example;
