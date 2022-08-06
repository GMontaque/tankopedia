import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
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
		</footer>
	);
}

export default Footer;
