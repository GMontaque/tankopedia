import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<div className="row">
				<div className="col-md-6">
					<ul className="">
						<li className="">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/DeepDive">
								Deep Dive
							</Link>
						</li>
						<li className="nav-item ">
							<Link className="nav-link" to="/infantryVsTank">
								Infantry vs Tank
							</Link>
						</li>
						<li className="nav-item ">
							<Link className="nav-link" to="/Ricochet">
								Ricochet
							</Link>
						</li>
						<li className="nav-item ">
							<Link className="nav-link" to="/SpecialEffectsAndSound">
								Special Effects
							</Link>
						</li>
						<li className="nav-item ">
							<Link className="nav-link" to="/TankBio">
								TankBio
							</Link>
						</li>
						<li className="nav-item ">
							<Link className="nav-link" to="/TankCrew">
								Tank Crew
							</Link>
						</li>
						<li className="nav-item ">
							<Link className="nav-link" to="/TankEngagement">
								Tank Engagement
							</Link>
						</li>
					</ul>
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
