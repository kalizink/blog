import React from "react";
import Feb13a from "../images/2:13.png";
import Feb13b from "../images/2:13b.png";

export default function Feb13() {
	return (
		<div className="Feb13">
			<div className="row">
				<div className="column3">
					<h2> Febuary 13, 2024</h2>
				</div>
				<div className="column3 text-center">
					<img src={Feb13b} alt="no-rel" title="?" className="img-fuid" />
				</div>
				<div className="column3 text-center">
					<img src={Feb13a} alt="no-rel" title="?" className="img-fuid" />
				</div>
			</div>
		</div>
	);
}
