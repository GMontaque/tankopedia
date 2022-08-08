import "../SASS/Home/Home.css";
import RoadMap from "../Img/roadmap.jpg";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<div className="row">
				<div className="col-md-2">
					<h1 className="h">The Home of all things Tank</h1>

					<p>
						Here you will find all the techincal information about tanks, from
						the types to the sounds and the different roles
					</p>
				</div>
				<div className="col-md-10">
					<div className="homeAccordion">
						<div className="card">
							<img
								alt=""
								src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg"
							/>
							<Link className="nav-link" to="/TankCrew">
								<div className="card__head">Tank Crew</div>
							</Link>
						</div>
						<div className="card">
							<img
								alt=""
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg"
							/>
							<Link className="nav-link" to="/TankBio">
								<div className="card__head">Tank Bio</div>
							</Link>
						</div>
						<div className="card">
							<img
								alt=""
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG"
							/>
							<Link className="nav-link" to="/InfantryVsTank">
								<div className="card__head">Infantry Vs Tanks</div>
							</Link>
						</div>
						<div className="card">
							<img
								alt=""
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg"
							/>
							<Link className="nav-link" to="/SpecialEffectsAndSound">
								<div className="card__head">Effects and Sound</div>
							</Link>
						</div>
						<div className="card">
							<img
								alt=""
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg"
							/>
							<Link className="nav-link" to="/Ricochet">
								<div className="card__head">Ricochet</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<img src={RoadMap} className="img-fluid rounded-top" alt="" />
			</div>
		</>
	);
}

export default Home;
