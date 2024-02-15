import React from "react";
import feb14a from "../images/2:14a.png";
import feb14c from "../images/2:14c.png";
import feb14d from "../images/2:14d.png";
import feb14e from "../images/2:14e.png";

export default function Feb14() {
	return (
		<div className="Feb14">
			<div className="row">
				<div className="column3 text-center">
					<h2>Febuary 14, 2024</h2>
					<p>
						{`They are growing so quick I decided to take AM and PM photos to document :)
					`}
					</p>
				</div>
				{/* pic container start */}
				<div className="column2">
					{/* am container start */}
					<div className="row">
						<div className="column2 text-center">
							<img src={feb14c} alt="no-rel" title="?" className="img-fluid" />
							<p>
								<strong>AM</strong>
							</p>
						</div>
						<div className="column2 text-center">
							<img src={feb14a} alt="no-rel" title="?" className="img-fluid" />
							<p>
								<strong>AM</strong>
							</p>
						</div>
					</div>
					{/* am container end */}
					<div className="row text-center">
						<div className="column2 text-center">
							<img src={feb14e} alt="no-rel" title="?" className="img-fluid" />
							<p>
								<strong>PM</strong>
							</p>
						</div>
						<div className="column2 text-center">
							<img src={feb14d} alt="no-rel" title="?" className="img-fluid " />
							<p>
								<strong>PM</strong>
							</p>
						</div>
					</div>
				</div>
				{/* pic container end */}
			</div>
		</div>
	);
}
