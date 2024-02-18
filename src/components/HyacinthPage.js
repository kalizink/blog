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

				<div className="container">
					<h2 className="text-center">Pink Hyacinths </h2>
					<div className="row">
						<div className="column5">
							<img
								src={feb2}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.2.2024</h3>
						</div>
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
								className="img-fluid "
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
					</div>
					<div className="row">
						<div className="column5">
							<img
								src={feb14}
								alt="no-rel"
								title="Hyacinth"
								className="img-fluid"
							/>
							<h3 className="text-center">2.14.2024</h3>
						</div>
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
							<p>The bottom one is starting to wilt from overwatering :(</p>
						</div>
						<div className="column5">
							<img
								src={image}
								alt="no-rel"
								title="Hyacinth"
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
