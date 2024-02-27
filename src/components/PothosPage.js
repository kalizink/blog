import React from "react";
import Navbar from "./Navbar";
import "./PothosPage.css";
import image from "../images/image.png";
import parent1 from "../images/pathos/parent1.png";
import parent2 from "../images/pathos/parent2.png";
import feb18 from "../images/pathos/2:18.png";
import feb19 from "../images/pathos/2:19.png";
import feb20 from "../images/pathos/2:20.png";
import feb21 from "../images/pathos/2:21.png";
import feb22 from "../images/pathos/2:22.png";
import feb23 from "../images/pathos/2:23.png";
import feb26 from "../images/pathos/2:26.png";

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

				<div className="container mt-5">
					<h2 className="text-center">Grow Clippings Grow</h2>
					{/* 1st row start */}
					<div className="row">
						<div className="column5 text-center">
							<img
								src={feb18}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.18.2024</h3>
						</div>
						<div className="column5 text-center">
							<img
								src={feb19}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.19.2024</h3>
						</div>
						<div className="column5 text-center">
							<img
								src={feb20}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.20.2024</h3>
						</div>
						<div className="column5 text-center">
							<img
								src={feb21}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.21.2024</h3>
						</div>{" "}
						<div className="column5 text-center">
							<img
								src={feb22}
								alt="no-rel"
								title="propegation"
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
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.23.2024</h3>
						</div>
						<div className="column5 text-center">
							<img
								src={feb26}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.26.2024</h3>
							<p>I went out of town- look at the roots!</p>
						</div>
						<div className="column5 text-center">
							<img
								src={image}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.27.2024</h3>
						</div>{" "}
						<div className="column5 text-center">
							<img
								src={image}
								alt="no-rel"
								title="propegation"
								className="img-fluid"
							/>
							<h3 className="text-center">2.28.2024</h3>
						</div>
						<div className="column5 text-center">
							<img
								src={image}
								alt="no-rel"
								title="propegation"
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
