import React, { useEffect } from "react";
import { useWindowDimensions } from "./Mediaquery";
import "../CSS/Navbar.css";

function Navbar(props) {
	const { width } = useWindowDimensions();

	useEffect(() => {
		let nav = document.getElementById("nav");
		if (width > 766.5) {
			nav.style.right = "-254px";
		}
	}, [width]);

	const toggleMenu = () => {
		if (width < 767) {
			let nav = document.getElementById("nav");
			let getRight = window
				.getComputedStyle(nav, null)
				.getPropertyValue("right");
			getRight === "0px"
				? (nav.style.right = "-254px")
				: (nav.style.right = "0");
		}
	};

	return (
		<header>
			<img
				src={require("../assets/shared/logo.svg").default}
				alt="logo"
				id="homeIcon"
			/>
			<nav id="nav">
				<img
					src={require("../assets/shared/icon-close.svg").default}
					alt="Cross to close the Navmenu"
					id="crossToClose"
					onClick={toggleMenu}
				/>
				<ul id="navList">
					<li
						className={`navListItems ${props.page === 0 ? "selectedPage" : ""}`}
						id="navHome"
						onClick={() => {
							props.setPage(0);
						}}
					>
						<span>00</span>HOME
					</li>
					<li
						className={`navListItems ${props.page === 1 ? "selectedPage" : ""}`}
						id="navDestination"
						onClick={() => {
							props.setPage(1);
						}}
					>
						<span>01</span>DESTINATION
					</li>
					<li
						className={`navListItems ${props.page === 2 ? "selectedPage" : ""}`}
						id="navCrew"
						onClick={() => {
							props.setPage(2);
						}}
					>
						<span>02</span>CREW
					</li>
					<li
						className={`navListItems ${props.page === 3 ? "selectedPage" : ""}`}
						id="navTechnology"
						onClick={() => {
							props.setPage(3);
						}}
					>
						<span>03</span>TECHNOLOGY
					</li>
				</ul>
			</nav>
			<img
				src={require("../assets/shared/icon-hamburger.svg").default}
				alt="Burger icon to open the menu"
				id="burgerToOpen"
				onClick={toggleMenu}
			/>
		</header>
	);
}

export default Navbar;
