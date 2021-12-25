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

export default function StudentLogin() {
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
							<Label for="exampleEmail">Institute Email-id</Label>
							<Input
								type="email"
								name="email"
								id="exampleEmail"
								placeholder="Institute Email-id"
							/>
							<br />
							<Link to="/otp" style={{textDecoration:"none"}}>
								<Button style={{ backgroundColor: "#727dbd" }} block>
									Next
								</Button>
							</Link>
						</FormGroup>
					</Form>
				</CardBody>
			</Card>
		</div>
	);
}
