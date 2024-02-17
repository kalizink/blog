import React from "react";
import NavbarComp from "./Navbar";
import "./HyacinthPage.css";
import feb2 from "../images/hyacinth/2:2.png";
import feb10a from "../images/hyacinth/2:10a.png";
import feb10b from "../images/hyacinth/2:10b.png";
import feb11 from "../images/hyacinth/2:11.png";
import feb13 from "../images/hyacinth/2:13.png";
import feb14 from "../images/hyacinth/2:14.png";
import feb15 from "../images/hyacinth/2:15.png";
import feb16 from "../images/hyacinth/2:16.png";
import feb17 from "../images/hyacinth/2:17.png";
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
						{`One of the most powerful garden scents of spring comes from hyacinth flowers (Hyacinthus orientalis) in bloom. Even at a distance, you'll notice these flowers' intense fragrance and the spikes of bright tubular flowers emerging from strap-shaped leaves. Introduced to Europe during the 16th century, hyacinth's popularity sparked Dutch bulb growers to breed more than 2,000 cultivars by the 18th century, and today there are about 60 to choose from in commercial cultivation.

Modern hyacinths are some of the easiest-to-grow perennial spring bulbs. Hyacinths will come back every year, though their flowers will diminish in vigor after a few seasons. They are best planted in the fall and have a moderate growth rate. Hyacinths can grow outdoors in the ground or pots, as well as indoors in a bulb vase filled with water. Keep them out of the reach of kids and critters: The bulbs are toxic to humans and pets.`}
					</p>
				</div>
				<div className="container">
					<div className="row">
						<div className="column2 text-center">
							<p>
								This is the first Hyacinth plant I'm growing. I got it because
								it was pink and that's my favorite color. I got two of them as
								bulbs and they are growing quick so lets document them :)
							</p>
						</div>
						<div className="column2 text-center">
							<img
								src={feb2}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div className="container">
					<h2 className="text-center">Grow Hyacinths Grow</h2>
					<div className="row">
						<div className="column5">
							<img
								src={feb10a}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.10.2024</h3>
						</div>
						<div className="column5">
							<img
								src={feb10b}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.10.2024</h3>
						</div>
						<div className="column5">
							<img
								src={feb11}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid img-adjust"
							/>
							<h3 className="text-center">2.11.2024</h3>
						</div>
						<div className="column5">
							<img
								src={feb13}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.13.2024</h3>
						</div>
						<div className="column5">
							<img
								src={feb14}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.14.2024</h3>
						</div>
					</div>
					<div className="row">
						<div className="column5">
							<img
								src={feb15}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.15.2024</h3>
						</div>
						<div className="column5">
							<img
								src={feb16}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.16.2024</h3>
						</div>
						<div className="column5">
							<img
								src={feb17}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.17.2024</h3>
						</div>
						<div className="column5">
							<img
								src={image}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.18.2024</h3>
						</div>{" "}
						<div className="column5">
							<img
								src={image}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.19.2024</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
