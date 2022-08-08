import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DeepDive from "./Pages/DeepDive";
import InfantryVsTank from "./Pages/InfantryVsTank";
import Ricochet from "./Pages/Ricochet";
import SpecialEffectsAndSound from "./Pages/SpecialEffectsAndSound";
import TankBio from "./Pages/TankBio";
import TankCrew from "./Pages/TankCrew";
import TankEngagement from "./Pages/TankEngagement";
import ErrorPage from "./Pages/ErrorPage";

function App() {
	return (
		<Router>
			<Navbar></Navbar>

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/DeepDive" element={<DeepDive />}></Route>
				<Route path="/InfantryVsTank" element={<InfantryVsTank />}></Route>
				<Route path="/Ricochet" element={<Ricochet />}></Route>
				<Route
					path="/SpecialEffectsAndSound"
					element={<SpecialEffectsAndSound />}
				></Route>
				<Route path="/TankBio" element={<TankBio />}></Route>
				<Route path="/TankCrew" element={<TankCrew />}></Route>
				<Route path="/TankEngagement" element={<TankEngagement />}></Route>
				<Route path="*" element={<ErrorPage />}></Route>
			</Routes>

			<Footer></Footer>
		</Router>
	);
}

export default App;
