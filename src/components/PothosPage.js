import React from "react";
import NavbarComp from "./NavbarComp";
import "./PothosPage.css";
import image from "../images/image.png";

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
					<div className="row">
						<div className="column2 text-center">
							<img src={image} alt="no-rel" title="?" className="img-fuid" />
						</div>
						<div className="column2 text-center">
							<img src={image} alt="no-rel" title="?" className="img-fuid" />
						</div>
					</div>
					<p className="text-center">
						{`I had a parent Pothos and rescued some clippings from my cats
                    destroyingi it. Here is a clipping that I am growing and documenting.
						`}
					</p>
				</div>
			</div>
		</div>
	);
}
