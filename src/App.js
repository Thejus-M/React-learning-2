import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
	// * variables
	const [mode, setMode] = useState("dark");
	const [alert, setAlert] = useState(null);

	// * functions
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1000);
	};
	const toggleMode = () => {
		if (mode === "dark") {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
			showAlert("Light mode is enabled !!", "success");
		} else {
			setMode("dark");
			document.body.style.backgroundColor = "rgb(0, 17, 17)";
			document.body.style.color = "rgb(99, 99, 100)";
			showAlert("Dark mode is enabled !!", "success");
		}
	};
	return (
		<>
			<Navbar title="Textiles" mode={mode} toggleMode={toggleMode} />
			<br />
			<Alert alert={alert} />
			<div className="container">
				<TextForm showAlert={showAlert} area="Enter Your text" mode={mode} />
			</div>
		</>
	);
}

export default App;
