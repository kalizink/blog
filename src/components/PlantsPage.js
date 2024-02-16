import React from "react";
import NavbarComp from "./NavbarComp";
import "./PlantsPage.css";
import Feb2 from "./Feb2";
import Feb10 from "./Feb10.js";
import Feb11 from "./Feb11.js";
import Feb13 from "./Feb13";
import Feb14 from "./Feb14";
import Feb15 from "./Feb15.js";

export default function PlantsPage() {
	return (
		<div>
			<NavbarComp />
			<br />
			<div className="PlantsPage mt-5">
				<h1 className="text-center">Plants Page</h1>
				<div className="plant-container">
					<Feb2 />
					<hr />
					<Feb10 />
					<hr />
					<Feb11 />
					<hr />
					<Feb13 />
					<hr />
					<Feb14 />
					<hr />
					<Feb15 />
					<hr />
				</div>
			</div>
		</div>
	);
}
