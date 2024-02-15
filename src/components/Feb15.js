import React from "react";
import feb15a from "../images/2:15a.png";
import feb15b from "../images/2:15b.png";
import image from "../images/image.png";

export default function Feb15() {
	return (
		<div className="Feb15">
			<div className="row">
				<div className="column3 text-center">
					<h2>Febuary 15, 2024</h2>
				</div>
				<div className="column2">
					<div className="row">
						<div className="column2 text-center">
							<img
								src={feb15b}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<p>
								<strong>AM</strong>
							</p>
						</div>{" "}
						<div className="column2 text-center">
							<img
								src={feb15a}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<p>
								<strong>AM</strong>
							</p>
						</div>
					</div>
					{/* pm container start */}
					<div className="row ">
						<div className="column2 text-center">
							<img
								src={image}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<p>
								<strong>PM</strong>
							</p>
						</div>
						<div className="column2 text-center">
							<img
								src={image}
								alt="no-rel"
								title="Herbs"
								className="img-fluid "
							/>
							<p>
								<strong>PM</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
