import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Link from "./components/link/Link";
import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<>
		    <Link />
			<Navbar />
			<Topbar />
		</>
	);
}

export default App;
