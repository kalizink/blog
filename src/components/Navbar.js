import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return (
		<div className="Navbar ">
			<Link to="/" className="icon">
				🌸
			</Link>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/PothosPage">Pothos</Link>
				</li>
				<li>
					<Link to="/HyacinthPage">Hyacinth</Link>
				</li>
				<li>
					<Link to="/TulipPage">Tulip</Link>
				</li>
			</ul>
		</div>
	);
}
