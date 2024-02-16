import React from "react";
import feb2 from "../images/2:2.png";

export default function Feb2() {
	return (
		<div className="Feb2">
			<div className="row ">
				<div className="columnDate  ">
					<h2 className="text-end">Febuary 2nd 2024</h2>
				</div>
				<div className="column2 text-center">
					<img
						src={feb2}
						alt="no-rel"
						title="Hyancinth"
						className="img-fluid"
					/>
				</div>
			</div>
		</div>
	);
}
