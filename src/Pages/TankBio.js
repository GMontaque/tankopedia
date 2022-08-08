import ExampleCard from "../Img/panther.webp";

function TankBio() {
	return (
		<>
			<div className="row">
				<h1>tank bio</h1>;
			</div>
			<div className="row">
				<div className="col-md-4">
					<h2>American</h2>
					<ul className="">
						<li className="">
							<a className="nav-link active" href="/*">
								Jumbo 76
							</a>
						</li>
						<li className="">
							<a className="nav-link" href="/*">
								Jumbo 75
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/*">
								M4A1
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/*">
								Stuart
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/*">
								M8
							</a>
						</li>
					</ul>
				</div>
				<div className="col-md-4">
					<h2>German</h2>
					<ul className="">
						<li className="">
							<a className="nav-link active" href="/*">
								Tiger
							</a>
						</li>
						<li className="">
							<a className="nav-link" href="/*">
								Panther
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/*">
								PanzerIV
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/*">
								Luchs
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/*">
								Puma
							</a>
						</li>
					</ul>
				</div>
				<div className="col-md-4">
					<h2>Russian</h2>
					<ul className="">
						<li className="">
							<a className="nav-link active" href="/*">
								IS-1
							</a>
						</li>
						<li className="">
							<a className="nav-link" href="/*">
								T34
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/*">
								BA-10
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<h2>Example Card</h2>
				<img src={ExampleCard} class="img-fluid rounded-top" alt="" />
			</div>
		</>
	);
}

export default TankBio;
