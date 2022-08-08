import { Link } from "react-router-dom";
import "../SASS/Footer/Footer.css";

function Footer() {
	return (
		<footer>
			<div className="row footer">
				<div className="col-md-6">
					<div className="footerNav">
						<Link className="nav-link" to="/">
							Home
						</Link>

						<Link className="nav-link" to="/DeepDive">
							Deep Dive
						</Link>

						<Link className="nav-link" to="/infantryVsTank">
							Infantry vs Tank
						</Link>

						<Link className="nav-link" to="/Ricochet">
							Ricochet
						</Link>

						<Link className="nav-link" to="/SpecialEffectsAndSound">
							Special Effects
						</Link>

						<Link className="nav-link" to="/TankBio">
							TankBio
						</Link>

						<Link className="nav-link" to="/TankCrew">
							Tank Crew
						</Link>

						<Link className="nav-link" to="/TankEngagement">
							Tank Engagement
						</Link>
					</div>
				</div>

				<div className="col-md-6">
					<a href="www.google.com">
						<i className="fab fa-discord fa-lg  "></i>
					</a>

					<i className="fab fa-discord fa-lg  "></i>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
