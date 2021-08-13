import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import List from "./components/List";

const App = () => {
	const [item, setItem] = useState("");
	const [list, setList] = useState([]);
	const [darkMode, setDarkMode] = useState([]);
	const [changeMode, setChangeMode] = useState(false);

	useEffect(() => {
		setMode();
	}, []);

	const setMode = () => {
		setDarkMode({
			backgroundColor: "white",
			color: "black",
			fill: "black",
		});
	};

	return (
		<div className="App" style={darkMode}>
			<Navbar
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				setMode={setMode}
				changeMode={changeMode}
				setChangeMode={setChangeMode}
			/>
			<List
				item={item}
				setItem={setItem}
				list={list}
				setList={setList}
				darkMode={darkMode}
			/>
		</div>
	);
};

export default App;
