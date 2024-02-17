import React from "react";
import NavbarComp from "./NavbarComp";
import "./PothosPage.css";
import image from "../images/image.png";
import parent1 from "../images/pathos/parent1.png";
import parent2 from "../images/pathos/parent2.png";
import feb14 from "../images/pathos/2:14.png";
import feb15 from "../images/pathos/2:15.png";
import feb16 from "../images/pathos/2:16.png";
import feb17 from "../images/pathos/2:17.png";

export default function PathosPage() {
	return (
		<div>
			<NavbarComp />
			<br />
			<div className="PothosPage mt-5">
				<h1 className="text-center">
					Pothos <em>(Epipremnum Aureum)</em>
				</h1>
				<p>
					{`Pothos (Epipremnum aureum) is one of the easiest houseplants to care for and an excellent choice for beginning growers. It's a tropical vine native to the Solomon Islands in the South Pacific easily trained to climb a support or trail from a pot or hanging basket. Adaptability and minimum maintenance make it a great plant for any houseplant collection.

Pothos are fast-growing plants often adding 12 to 18 inches of length in a month. Draping vines feature pointed, heart-shaped green leaves that may be variegated with white, yellow, or pale green striations. Be aware that pothos plants are toxic to pets.`}
				</p>
				<div className="container">
					<p className="text-center">
						{`I had a parent Pothos and rescued some clippings from my cats
                    destroying it. Here is a clipping that I am growing and documenting. Look at the new growths starting in the pot!
						`}
					</p>
					<div className="row">
						<div className="column2 text-center">
							<img
								src={parent1}
								alt="no-rel"
								title="Pothos"
								className="img-fuid"
							/>
						</div>
						<div className="column2 text-center">
							<img
								src={parent2}
								alt="no-rel"
								title="Pothos"
								className="img-fuid"
							/>
						</div>
					</div>
				</div>
				{/* clipping container start */}
				<div className="container mt-5">
					<h2 className="text-center">Grow Clippings Grow</h2>
					<div className="row">
						<div className="column5">
							<img
								src={feb14}
								alt="no-rel"
								title="Pothos clipping"
								className="img-fluid"
							/>
							<h3 className="text-center">2.14.2024</h3>
						</div>
						<div className="column5">
							<img
								src={feb15}
								alt="no-rel"
								title="Pothos clipping"
								className="img-fluid"
							/>
							<h3 className="text-center">2.15.2024</h3>
						</div>
						<div className="column5">
							<img
								src={feb16}
								alt="no-rel"
								title="Pothos clipping"
								className="img-fluid"
							/>
							<h3 className="text-center">2.16.2024</h3>
						</div>
						<div className="column5">
							<img
								src={feb17}
								alt="no-rel"
								title="Pothos clipping"
								className="img-fluid"
							/>
							<h3 className="text-center">2.17.2024</h3>
						</div>
						<div className="column5">
							<img
								src={image}
								alt="no-rel"
								title="Pothos clipping"
								className="img-fluid"
							/>
							<h3 className="text-center">2.18.2024</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
