import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<div className="row">
				<h1>footer title</h1>
				<Link to="/">Navbar</Link>
				<span>-</span>
				<Link to="/TankBio">Homess</Link>
				<span>-</span>
				<Link to="/TankCrew">Link</Link>
				<span>-</span>
				<Link to="/Ricochet">Action 1</Link>
				<span>-</span>
				<Link to="/DeepDive">Action 2</Link>
			</div>
			<div className="row">
				<a href="www.google.com">
					<i class="fab fa-discord fa-lg  "></i>
				</a>

				<i class="fab fa-discord fa-lg  "></i>
			</div>
		</footer>
	);
}

export default Footer;
