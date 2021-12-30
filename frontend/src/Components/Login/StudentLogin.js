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
	Alert,
} from "reactstrap";
import axios from "axios";
import { loginStudent } from "../../actions/Actions";
import { useSelector, useDispatch } from 'react-redux'
export default function StudentLogin() {
	const [email, setEmail] = useState("");
	const [ msg , setMsg] = useState(false)
	const [ err , setErr] = useState(false)

	const dispatch = useDispatch()

	const userMail = useSelector((state) => state)
	console.log(userMail)
	
	function GetOtp(e) {
		e.preventDefault();
		let data = {
			mail : email
		}
		dispatch(loginStudent(data,res=>{
			if(res.status === 200){
				setMsg(true)
				setInterval(()=>{
					window.location.href = '/otp'
				},200)
			}
			let interval;
			if(res.status === 400){
				setErr(true)
				clearInterval(interval)
				interval = setInterval(()=>{
					setErr(false);
				},5000)
			}
		}));
	}

	return (
		<div className="container-form">
			
			<Card className="form">
				<Alert style={{display: msg ? "block" : "none" }}>Otp Send Successfully</Alert>
				<Alert color="danger" style={{display: err ? "block" : "none" }}>Email is not registered in Database</Alert>
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
					<Form onSubmit={GetOtp}>
						<FormGroup>
							<Label for="exampleEmail">Institute Email-id</Label>
							<Input
								type="email"
								name="email"
								id="exampleEmail"
								placeholder="Institute Email-id"
								onChange={(e) => {
									e.preventDefault();
									setEmail(e.target.value);
								}}
							/>
							<br />
							<Button
								type="submit"
								style={{ backgroundColor: "#727dbd" }}
								block
							>
								Next
							</Button>
						</FormGroup>
					</Form>
				</CardBody>
			</Card>
		</div>
	);
}
