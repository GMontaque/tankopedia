import TankCoomanderRussian from "../Img/TankCommanderRussian.jpg";
import TankCrewmanGerman from "../Img/TankCrewmanGerman.jpg";

function TankCrew() {
	return (
		<>
			<h1>Tank Crew</h1>
			<div class="homeAccordion">
				<div class="card">
					<img src={TankCoomanderRussian} alt="" />
					<div class="card__head">
						Tank Commander
						<p>
							<span>Summary:</span>
							Your role is to coordinate and lead your crew. You have better
							visibility than your crew and the ability to communicate with
							Officers and the Commander. To effectively communicate with your
							team, you'll need to be able to multitask, providing directions to
							the driver while also giving targets for the gunner.
						</p>
						<a href="www.google.com">More Details</a>
					</div>
				</div>
				<div class="card">
					<img src={TankCrewmanGerman} alt="" />
					<div class="card__head">
						Tank Gunner - Crewman
						<p>
							<span>Summary:</span>
							As a Crewman you'll be spending the majority of your time on the
							front in a tank. Under the leadership of a Tank Commander you will
							find yourself either driving a tank or taking control of its
							armaments. The important part as the gunner is to follow the
							commands of the tank commander, do not fire unless told to do so.
							As you gain more skills you will qucikly be able to log on targets
							and fire with only a 2 or 3 word comamnd from the tank commander.
						</p>
						<a href="www.google.com">More Details</a>
					</div>
				</div>
				<div class="card">
					<img src={TankCrewmanGerman} alt="" />
					<div class="card__head">
						Tank Driver - Crewman
						<p>
							<span>Summary:</span>
							As a Crewman you'll be spending the majority of your time on the
							front in a tank. Under the leadership of a Tank Commander you will
							find yourself either driving a tank or taking control of its
							armaments. The impor part as a driver is to make sure you follow
							the orders of the tank commander, do not fire unless told to do
							so. As you gain more skills you will learn where you can and can't
							drive and where to position the tank.
						</p>
						<a href="www.google.com">More Details</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default TankCrew;
