import React from "react";
import "./HerbPage.css";
import Navbar from "./Navbar";
import image from "../images/image.png";
import feb12 from "../images/herbs/2:12.png";
import feb13 from "../images/herbs/2:13.png";
import feb14 from "../images/herbs/2:14.png";
import feb15 from "../images/herbs/2:15.png";
import feb16 from "../images/herbs/2:16.png";
import feb17 from "../images/herbs/2:17.png";
import feb18 from "../images/herbs/2:18.png";
import feb19 from "../images/herbs/2:19.png";
import feb20 from "../images/herbs/2:20.png";
import feb21 from "../images/herbs/2:21.png";
import feb22 from "../images/herbs/2:22.png";
import feb23 from "../images/herbs/2:23.png";
import feb26 from "../images/herbs/2:26.png";

export default function HerbPage() {
	return (
		<div>
			<Navbar />
			<div className="HerbPage">
				<div className="container-clear">
					<h1 className="text-center"> Herbs</h1>
					<p>
						Fresh herbs make just about any dish better, and for good reason.
						Not only do we love the fragrance and flavor they provide, but we
						love how easy they are to grow and maintain. The herbs growing are
						watermelon, thyme, basil, onion, sweet peppers, green onion :)
					</p>
					<p>
						<strong> Care Instructions:</strong> <br />- Most herbs grow best in
						well-drained soil and develop intense flavor if kept on the dry
						side. <br />- Watering needs depend on soil type, weather
						conditions, and variety.
					</p>
				</div>
				{/* pic container start */}
				<div className="container">
					<h2 className="text-center">Let's Grow Herbs </h2>
					{/* 1st row start */}
					<div className="row">
						<div className="column4 text-center">
							<img
								src={feb12}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.12.2024</h3>
						</div>
						<div className="column4 text-center">
							<img
								src={feb13}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.13.2024</h3>
						</div>
						<div className="column4 text-center">
							<img
								src={feb14}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.14.2024</h3>
						</div>
						<div className="column4 text-center">
							<img
								src={feb15}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.15.2024</h3>
						</div>
					</div>
					{/* 2nd row */}
					<div className="row">
						<div className="column4 text-center">
							<img
								src={feb16}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.16.2024</h3>
						</div>
						<div className="column4 text-center">
							<img
								src={feb17}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.17.2024</h3>
						</div>
						<div className="column4 text-center">
							<img
								src={feb18}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.18.2024</h3>
						</div>
						<div className="column4 text-center">
							<img
								src={feb19}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.19.2024</h3>
						</div>
					</div>
					{/* 3rd row */}
					<div className="row">
						<div className="column4 text-center">
							<img
								src={feb20}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.20.2024</h3>
						</div>
						<div className="column4 text-center">
							<img
								src={feb21}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.21.2024</h3>
						</div>
						<div className="column4 text-center">
							<img
								src={feb22}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.22.2024</h3>
						</div>
						<div className="column4 text-center">
							<img
								src={feb23}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.23.2024</h3>
						</div>
					</div>

					{/* 4th row */}
					<div className="row">
						<div className="column4 text-center">
							<img
								src={feb26}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.26.2024</h3>
						</div>
						<div className="column4 text-center">
							<img
								src={image}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.27.2024</h3>
						</div>{" "}
						<div className="column4 text-center">
							<img
								src={image}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.28.2024</h3>
						</div>
						<div className="column4 text-center">
							<img
								src={image}
								alt="no-rel"
								title="Herbs"
								className="img-fluid"
							/>
							<h3 className="text-center">2.29.2024</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
