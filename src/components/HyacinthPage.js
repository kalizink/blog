import React from "react";
import NavbarComp from "./Navbar";
import "./HyacinthPage.css";
import feb17p from "../images/purpleH/2:17.png";
import feb18p from "../images/purpleH/2:18.png";
import feb19p from "../images/purpleH/2:19.png";
import feb21 from "../images/purpleH/2:21.png";
import feb22 from "../images/purpleH/2:22.png";
import feb23 from "../images/purpleH/2:23.png";
import feb26 from "../images/purpleH/2:26.png";
import image from "../images/image.png";

export default function HyacinthPage() {
	return (
		<div>
			<NavbarComp />

			<div className="HyacinthPage">
				<div className="container-clear">
					<h1 className="text-center">
						Hyacinth <em>(Hyacinthus Orientalis)</em>{" "}
					</h1>
					<p>
						One of the most powerful garden scents of spring comes from hyacinth
						flowers (Hyacinthus orientalis) in bloom. Modern hyacinths are some
						of the easiest-to-grow perennial spring bulbs. Hyacinths will come
						back every year, though their flowers will diminish in vigor after a
						few seasons. Hyacinths can grow outdoors in the ground or pots, as
						well as indoors in a bulb vase filled with water.{" "}
						<strong>The bulbs are toxic to humans and pets.</strong>
					</p>
					<p>
						<strong> Care Instructions:</strong> <br />
						- full sun to partial shade Water once a week <br />- check the
						ground by sticking your finger in, and water only when it's totally
						dry
					</p>
				</div>

				{/* purple hyacinth container start */}
				<div className="container mt-5">
					<h2 className="text-center">Purple Hyacinth </h2>
					{/* 1st row start */}
					<div className="row">
						<div className="column5 text-center">
							<img
								src={feb17p}
								alt="no-rel"
								title="Purple Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.17.2024</h3>
							<p>All of his roots rotted off when I replanted</p>
						</div>
						<div className="column5 text-center">
							<img
								src={feb18p}
								alt="no-rel"
								title="Purple Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.18.2024</h3>
							<p>Drying out in a new home</p>
						</div>
						<div className="column5 text-center">
							<img
								src={feb19p}
								alt="no-rel"
								title="Purple Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.19.2024</h3>
						</div>
						<div className="column5 text-center">
							<img
								src={feb21}
								alt="no-rel"
								title="Purple Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.21.2024</h3>
						</div>
						<div className="column5 text-center">
							<img
								src={feb22}
								alt="no-rel"
								title="Purple Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.22.2024</h3>
						</div>
					</div>
					{/* 2nd row start */}
					<div className="row">
						<div className="column5 text-center">
							<img
								src={feb23}
								alt="no-rel"
								title="Purple Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.23.2024</h3>
						</div>{" "}
						<div className="column5 text-center">
							<img
								src={feb26}
								alt="no-rel"
								title="Purple Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.26.2024</h3>
						</div>
						<div className="column5 text-center">
							<img
								src={image}
								alt="no-rel"
								title="Purple Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.27.2024</h3>
						</div>{" "}
						<div className="column5 text-center">
							<img
								src={image}
								alt="no-rel"
								title="Purple Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.28.2024</h3>
						</div>
						<div className="column5 text-center">
							<img
								src={image}
								alt="no-rel"
								title="Purple Hyacinth"
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
