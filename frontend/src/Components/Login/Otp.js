import React from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function Otp() {
	return (
		<div>
			<div className="form">
				<div>
					<div className="header-form">
						<h2>LOGIN</h2>
						<h5>For Student</h5>
					</div>
					<br/>
					<br/>
					<br/>
					<Form>
						<FormGroup>
							<Label
								for="exampleEmail"
							>
								Enter the OTP
							</Label>
							<Input
								type="text"
								name="otp"
								id="exampleEmail"
								placeholder="Enter Otp"
							/>
							<br/>
							<Button style={{backgroundColor:"#727dbd"}} block>Login</Button>
						</FormGroup>
					</Form>
				</div>
			</div>
		</div>
	);
}
