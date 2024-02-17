import React from "react";
import Feb13a from "../images/hyacinth/2:13b.png";
import Feb13b from "../images/herbs/2:13.png";

export default function Feb13() {
	return (
		<div className="Feb13 mt-5">
			<div className="container">
				<div className="row">
					<div className="columnDate">
						<h2> Febuary 13, 2024</h2>
					</div>
					<div className="column3 text-center">
						<img
							src={Feb13b}
							alt="no-rel"
							title="Hyacinth"
							className="img-fuid"
						/>
					</div>
					<div className="column3 text-center">
						<img src={Feb13a} alt="no-rel" title="?" className="img-fuid" />
					</div>
				</div>
			</div>
		</div>
	);
}
