import React from "react";
import NavbarComp from "./NavbarComp";
import Feb2 from "../images/2:2.png";
import "./PlantsPage.css";

export default function PlantsPage() {
	return (
		<div>
			<NavbarComp />
			<br />
			<div className="PlantsPage mt-5">
				<h1 className="text-center">Plants Page</h1>
				<div className="plant-container">
					{/*new day */}
					<div className="row">
						<div className="column">
							<h2 className="text-center">Day 1: Feb 2nd 2024</h2>
						</div>
						<div className="column">
							<img
								src={Feb2}
								alt="no-rel"
								title="Hyancinth"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
