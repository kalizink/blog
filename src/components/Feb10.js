import React from "react";
import Feb10a from "../images/hyacinth/2:10a.png";
import Feb10b from "../images/hyacinth/2:10b.png";

export default function Feb10() {
	return (
		<div className="Feb10 mt-5">
			<div className="container">
				<div className="row">
					<div className="columnDate">
						<h2> Febuary 10th 2024</h2>
					</div>
					<div className="column3 text-center ">
						<img
							src={Feb10a}
							alt="no-rel"
							title="Hyacinth"
							className="img-fluid "
						/>
					</div>
					<div className="column3 text-center">
						<img
							src={Feb10b}
							alt="no-rel"
							title="Hyacinth"
							className="img-fluid"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
