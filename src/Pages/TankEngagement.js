import TankEngExample from "../Img/TankEngExample.webp";
import HeavyVsHeavy from "../Img/hvyvshvy.webp";
import { Link } from "react-router-dom";

function TankEngagment() {
	return (
		<>
			<div className="row">
				<h1>Tank Engagement</h1>
			</div>

			<div className="row">
				<div className="col-md-6">
					<Link className="nav-link" to="/TankBio">
						Tank Engagement - Example
					</Link>
					<p>
						Find out all the information you need to understand when you can hit
						the tank and destroy it and when its time to run away
					</p>
					<img
						src={TankEngExample}
						className="img-fluid rounded-top"
						alt=""
						width="50%"
					/>
				</div>

				<div className="col-md-6">
					<Link className="nav-link" to="/TankBio">
						Tank Damage - Example
					</Link>
					<p>
						Find out all the information about the different parts of the tank
						and how they react when taking damage such as what you can and cant
						survive
					</p>
					<img
						src={HeavyVsHeavy}
						className="img-fluid rounded-top"
						alt=""
						width="50%"
					/>
				</div>
			</div>
		</>
	);
}

export default TankEngagment;
