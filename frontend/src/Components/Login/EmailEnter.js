import React from "react";
import "./style.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function EmailEnter() {
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
								Institute Email-id
							</Label>
							<Input
								type="email"
								name="email"
								id="exampleEmail"
								placeholder="Institute Email-id"
							/>
							<br/>
							<Button style={{backgroundColor:"#727dbd"}} block>Next</Button>
						</FormGroup>
					</Form>
				</div>
			</div>
		</div>
	);
}
