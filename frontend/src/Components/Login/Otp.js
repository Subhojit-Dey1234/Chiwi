import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { verifyOtp } from "../../actions/Actions";

export default function Otp() {
	const dispatch = useDispatch();
	const [otp, setOtp] = useState("");
	function Login(e) {
		e.preventDefault();
		var data = {
			mail: "subhojit9700dey@gmail.com",
			otp,
		};

		dispatch(verifyOtp(data,res=>{
			if(res.status === 200){
				if(!localStorage.getItem('access-token')){
					localStorage.setItem('access-token',res.data.accessToken)
				}
			}
		}))
	}
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
					<Form onSubmit={Login}>
						<FormGroup>
							<Label for="exampleEmail">Enter the OTP</Label>
							<Input
								type="text"
								name="otp"
								id="exampleEmail"
								placeholder="Enter the OTP"
								onChange={(e)=>{
									setOtp(e.target.value)
								}}
							/>
							<br />
							<Button
								type="submit"
								style={{ backgroundColor: "#727dbd" }}
								block
							
							>
								Login
							</Button>
						</FormGroup>
					</Form>
				</CardBody>
			</Card>
		</div>
	);
}
