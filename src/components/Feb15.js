import React from "react";
import feb15a from "../images/herbs/2:15a.png";
import feb15b from "../images/hyacinth/2:15b.png";
import feb15c from "../images/hyacinth/2:15c.png";
import feb15d from "../images/herbs/2:15d.png";

export default function Feb15() {
	return (
		<div className="Feb15 mt-5">
			<div className="container">
				<div className="row ">
					<div className="columnDate text-center">
						<h2 className="margin-adjust"> Febuary 15, 2024</h2>
					</div>

					<div className="column-grid-container ">
						{/* top row*/}
						<div className="row">
							<div className="column2-grid">
								<img
									src={feb15b}
									alt="no-rel"
									title="Hyacinth"
									className="img-fluid"
								/>
								<p className="text-center">
									<strong>AM</strong>
								</p>
							</div>

							<div className="column2-grid">
								<img
									src={feb15a}
									alt="no-rel"
									title="Herbs"
									className="img-fluid"
								/>
								<p className="text-center">
									<strong>AM</strong>
								</p>
							</div>
						</div>
						{/* bottom row */}
						<div className="row">
							<div className="column2-grid">
								<img
									src={feb15c}
									alt="no-rel"
									title="Hyacinth"
									className="img-fluid"
								/>
								<p className="text-center">
									<strong>PM</strong>
								</p>
							</div>

							<div className="column2-grid">
								<img
									src={feb15d}
									alt="no-rel"
									title="Herbs"
									className="img-fluid"
								/>
								<p className="text-center">
									<strong>PM</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>{" "}
			{/* herer */}
		</div>
	);
}
