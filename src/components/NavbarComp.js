import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavbarComp.css";

export default function NavbarComp() {
	return (
		<div className="NavbarComp">
			<Navbar expand="lg" className="bg-body-tertiary " fixed="top">
				<Container>
					<Navbar.Brand>
						<Link to="/"> 🌸</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto text-end">
							<Nav>
								<Link to="/"> Home</Link>
							</Nav>
							<Nav>
								<Link to="/PlantsPage"> Plants</Link>
							</Nav>
							<Nav>
								<Link to="/PathosPage"> Pathos</Link>
							</Nav>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
