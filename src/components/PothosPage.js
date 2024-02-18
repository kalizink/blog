import React from "react";
import Navbar from "./Navbar";
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
			<Navbar />
			<div className="PothosPage">
				<div className="container-clear">
					<h1 className="text-center">
						Pothos <em>(Epipremnum Aureum)</em>
					</h1>
					<p>
						Pothos (Epipremnum aureum) is one of the easiest houseplants to care
						for and an excellent choice for beginning growers. It's a tropical
						vine native to the Solomon Islands in the South Pacific easily
						trained to climb a support or trail from a pot or hanging basket.
						Adaptability and minimum maintenance make it a great plant for any
						houseplant collection.{" "}
						<strong>Be aware that pothos plants are toxic to pets.</strong>
					</p>
					<p>
						<strong> Care Instructions: </strong>
						<br />
						- Indirect light <br />
						- Feed with balanced houseplant fertilizer monthly during spring and
						summer. <br />- Water every 1-2 weeks (less in the winter). Let the
						soil dry out completely between waterings or it will cause root rot
						:(
					</p>
				</div>
				{/* parent container start */}
				<div className="container">
					<div className="row">
						<div className="column3">
							<p>
								I had a full and healthy parent Pothos, but my cat thought it
								was an all-you-can-eat buffet. Luckily, I saved some clippings
								and nursed it back to health. Check out the new growths on the
								right picture. I’m documenting one of my clippings and
								propagating from the parent plant.
							</p>
						</div>
						<div className="column3">
							<img
								src={parent1}
								alt="no-rel"
								title="Pothos Plant"
								className="img-fluid"
							/>
						</div>{" "}
						<div className="column3">
							<img
								src={parent2}
								alt="no-rel"
								title="Pothos Plant"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
				{/* parent container end */}
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
				{/* propegate container */}
				<div className="container mt-5">
					<h2 className="text-center">Let's Propegate</h2>
					<div className="row">
						<div className="column5">
							<img
								src={image}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.17.2024</h3>
						</div>
						<div className="column5">
							<img
								src={image}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.18.2024</h3>
						</div>
						<div className="column5">
							<img
								src={image}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.19.2024</h3>
						</div>
						<div className="column5">
							<img
								src={image}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.20.2024</h3>
						</div>
						<div className="column5">
							<img
								src={image}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.21.2024</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
