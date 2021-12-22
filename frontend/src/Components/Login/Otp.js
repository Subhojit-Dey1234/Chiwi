import React from "react";
import "./style.css";
import {
	Card,
	CardBody,
	CardTitle,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	CardSubtitle,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Otp() {
	return (
		<div className="container-form">
			<Card className="form">
				<CardBody>
					<div className="header">
						<CardTitle style={{ fontWeight: "bolder" }} className="header-main">
							LOGIN
						</CardTitle>
						<CardSubtitle className="header-subtitle">
							&nbsp;&nbsp;FOR STUDENTS
						</CardSubtitle>
					</div>
					<br />
					<br />
					<Form>
						<FormGroup>
							<Label for="exampleEmail">Enter the OTP</Label>
							<Input
								type="text"
								name="otp"
								id="exampleEmail"
								placeholder="Enter the OTP"
							/>
							<br />
							<Link to="/login" style={{textDecoration:"none"}}>
								<Button style={{ backgroundColor: "#727dbd" }} block>
									Login
								</Button>
							</Link>
						</FormGroup>
					</Form>
				</CardBody>
			</Card>
		</div>
	);
}
