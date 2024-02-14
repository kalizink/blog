import React from "react";
import "./Feb10.css";
import Feb10a from "../images/2:10a.png";
import Feb10b from "../images/2:10b.png";

export default function Feb10() {
	return (
		<div className="Feb10">
			<div className="Feb10-row">
				<div className="Feb10-column">
					<h2> Day 9: Feb 10th 2024</h2>
				</div>
				<div className="Feb10-column">
					<img
						src={Feb10a}
						alt="no-rel"
						title="Hyacinth"
						className="img-fluid"
					/>
				</div>
				<div className="Feb10-column">
					<img
						src={Feb10b}
						alt="no-rel"
						title="Hyacinth"
						className="img-fluid"
					/>
				</div>
			</div>
		</div>
	);
}
