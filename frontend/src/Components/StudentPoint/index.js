import React, { useState } from "react";
import TableData from "./Table";
import "./style.css";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from "reactstrap";

export default function Index() {
	const [isOpen, setOpen] = useState(false);
	function toggle() {
		setOpen(!isOpen);
	}
	return (
		<div className="studentPoint">
			<h2>Academic Point</h2>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "auto auto auto",
          alignItems:"end"
				}}
			>
				<h5>Show Only</h5>
				<Dropdown toggle={toggle} isOpen={isOpen}>
					<DropdownToggle caret>Year</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>1st Year</DropdownItem>
						<DropdownItem>2nd Year</DropdownItem>
						<DropdownItem>3rd Year</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown toggle={toggle} isOpen={isOpen}>
					<DropdownToggle caret>Year</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>1st Year</DropdownItem>
						<DropdownItem>2nd Year</DropdownItem>
						<DropdownItem>3rd Year</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
      <br/>
			<TableData />
      <br/>
      <h2>Carrer Point</h2>
      <div
				style={{
					display: "grid",
					gridTemplateColumns: "auto auto auto",
          alignItems:"end"
				}}
			>
				<h5>Show Only</h5>
				<Dropdown toggle={toggle} isOpen={isOpen}>
					<DropdownToggle caret>SDE Profile</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>1st Year</DropdownItem>
						<DropdownItem>2nd Year</DropdownItem>
						<DropdownItem>3rd Year</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
			<br/>
			<TableData />
		</div>
	);
}
