import React from "react";
import Feb11a from "../images/2:11.png";
import Feb11b from "../images/2:12.png";

export default function Feb11() {
	return (
		<div className="Feb11 mt-5">
			<div className="container">
				<div className="row">
					<div className="columnDate ">
						<h2> Febuary 11, 2024</h2>
						<p className="text-center">
							I remembered I planted a bunch of herbs Day 1. You can see some
							Thyme starting to sprout.
						</p>
					</div>
					<div className="column3 text-center">
						<img
							src={Feb11a}
							alt="no-rel"
							title="Hyacinth"
							className="img-fluid"
						/>
					</div>
					<div className="column3 text-center">
						<img
							src={Feb11b}
							alt="no-rel"
							title="Herbs"
							className="img-fluid"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
