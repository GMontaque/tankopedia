import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<h1>Navbar</h1>

			{/* <nav>
					<Link to="/TankBio"> Tank</Link>
				</nav> */}

			<nav className="navbar navbar-expand-md navbar-light bg-light">
				<div className="container">
					<Link className="navbar-brand" to="/">
						Navbar
					</Link>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="collapsibleNavId">
						<ul className="navbar-nav me-auto mt-2 mt-lg-0">
							<li className="nav-item active">
								<Link className="nav-link" to="/TankBio">
									Homess <span className="visually-hidden">(current)</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/TankCrew">
									Link
								</Link>
							</li>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									to="/*"
									id="dropdownId"
									data-bs-toggle="dropdown"
									// aria-haspopup="true"
									aria-expanded="false"
								>
									Dropdown
								</Link>
								<div className="dropdown-menu" aria-labelledby="dropdownId">
									<Link className="dropdown-item" to="/Ricochet">
										Action 1
									</Link>
									<Link className="dropdown-item" to="/DeepDive">
										Action 2
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;