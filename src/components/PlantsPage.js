import React from "react";
import NavbarComp from "./NavbarComp";
import "./PlantsPage.css";
import Feb2 from "./Feb2";
import Feb10 from "./Feb10.js";
import Feb11 from "./Feb11.js";
import Feb13 from "./Feb13";
import Feb14 from "./Feb14";

export default function PlantsPage() {
	return (
		<div>
			<NavbarComp />
			<br />
			<div className="PlantsPage mt-5">
				<h1 className="text-center">Plants Page</h1>
				<div className="plant-container">
					<Feb2 />
					<Feb10 />
					<Feb11 />
					<Feb13 />
					<Feb14 />
				</div>
			</div>
		</div>
	);
}
