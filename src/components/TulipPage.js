import React from "react";
import Navbar from "./Navbar";
import "./TulipPage.css";
import image from "../images/image.png";
import feb17 from "../images/tulip/2:17.png";
import feb18 from "../images/tulip/2:18.png";
import feb19 from "../images/tulip/2:19.png";

export default function TulipPage() {
	return (
		<div>
			<Navbar />
			<div className="TulipPage">
				<div className="container-clear">
					<h1 className="text-center">Tulip</h1>
					<p>
						Tulips are iconic bulbs flowering in April or May, filling gardens
						with color, including hybrids produced in every color except true
						blue. Tulip bulbs contain alkaloid and glycoside compounds that are{" "}
						<strong>
							mildly toxic to humans (can cause "tulip fingers") and are more
							seriously toxic to pets.
						</strong>
					</p>
					<p>
						<strong> Care Instructions:</strong> <br />- Plant bulbs in the
						fall; they need the winter chill to spur emergence in the spring.{" "}
						<br />
						- Place in full sun <br />
						- Ensure they have well-draining soil that will not be waterlogged
						or get too much moisture or humidity; only water when dry
						<br />- Feed the soil with compost, bone meal, or granular
						fertilizer when planting.
					</p>
				</div>
				{/* pic container start*/}
				<div className="container">
					<div className="row">
						<div className="column5 text-center">
							<img
								src={feb17}
								alt="no-rel"
								title="Hyacinth"
								className="img-fuid"
							/>
							<h3 className="text-center">2.17.2024</h3>
						</div>{" "}
						<div className="column5 text-center">
							<img
								src={feb18}
								alt="no-rel"
								title="Hyacinth"
								className="img-fuid"
							/>
							<h3 className="text-center">2.18.2024</h3>
						</div>{" "}
						<div className="column5 text-center">
							<img
								src={feb19}
								alt="no-rel"
								title="Hyacinth"
								className="img-fuid"
							/>
							<h3 className="text-center">2.19.2024</h3>
						</div>{" "}
						<div className="column5 text-center">
							<img
								src={image}
								alt="no-rel"
								title="Hyacinth"
								className="img-fuid"
							/>
							<h3 className="text-center">2.20.2024</h3>
						</div>{" "}
						<div className="column5 text-center">
							<img
								src={image}
								alt="no-rel"
								title="Hyacinth"
								className="img-fuid"
							/>
							<h3 className="text-center">2.21.2024</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
