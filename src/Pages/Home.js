import "../SASS/Home/Home.css";
import RoadMap from "../Img/roadmap.jpg";

function Home() {
	return (
		<>
			<div className="row">
				<div class="col-md-2">
					<h1 className="h">Home page</h1>
				</div>
				<div class="col-md-10">
					{/* change container to container-fluid and fix or remove */}
					<div className="homeAccordion">
						<div className="card">
							<img
								alt=""
								src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg"
							/>
							<div className="card__head">Plotting Cat</div>
						</div>
						<div className="card">
							<img
								alt=""
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg"
							/>
							<div className="card__head">Angry Cat</div>
						</div>
						<div className="card">
							<img
								alt=""
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG"
							/>
							<div className="card__head">Curious Cat</div>
						</div>
						<div className="card">
							<img
								alt=""
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg"
							/>
							<div className="card__head">Prowling Cat</div>
						</div>
						<div className="card">
							<img
								alt=""
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg"
							/>
							<div className="card__head">Sleepy Cat</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<img src={RoadMap} class="img-fluid rounded-top" alt="" />
			</div>
		</>
	);
}

export default Home;
