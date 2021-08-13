import React from "react";

const Navbar = (props) => {
	const changeState = () => {
		if (props.changeMode === true) {
			console.log("it is false");
			props.setDarkMode({
				backgroundColor: "white",
				color: "black",
				fill: "black",
			});
			console.log(props.darkMode);
		} else {
			console.log("it is true");

			props.setDarkMode({
				backgroundColor: "black",
				color: "white",
				fill: "white",
			});
			console.log(props.darkMode);
		}
	};
	const modeHandler = () => {
		props.setChangeMode(!props.changeMode);
		changeState();
	};
	return (
		<div>
			<div className="navbar" style={props.darkMode}>
				<ul>
					<li>My work</li>
					<li>
						<button className="moon" onClick={modeHandler}>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="moon"
								className="svg-inline--fa fa-moon fa-w-16"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
							</svg>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
