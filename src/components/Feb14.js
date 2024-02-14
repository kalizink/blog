import React from "react";
import feb14a from "../images/2:14a.png";
import feb14b from "../images/2:14b.png";
import feb14c from "../images/2:14c.png";

export default function Feb14() {
	return (
		<div className="Feb14">
			<div className="row">
				<div className="column4 text-center">
					<h2>Day 13: Feb 14, 2024</h2>
					<p>
						I have this clipping from my big Pathos plant that I also want to
						document :)
					</p>
				</div>
				<div className="column4 text-center">
					<img
						src={feb14c}
						alt="no-rel"
						title="Hyacinth"
						className="img-fluid"
					/>
				</div>
				<div className="column4 text-center">
					<img src={feb14b} alt="no-rel" title="Pathos" className="img-fluid" />
				</div>
				<div className="column4 text-center">
					<img src={feb14a} alt="no-rel" title="Herbs" className="img-fluid" />
				</div>
			</div>
		</div>
	);
}
