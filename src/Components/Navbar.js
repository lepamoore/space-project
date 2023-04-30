import React, { useState } from "react";
import { useWindowDimensions } from "./Mediaquery";
import "../CSS/Navbar.css";

function Navbar(props) {
	const { height, width } = useWindowDimensions();

	const toggleMenu = () => {
		if (width < 767) {
			let nav = document.getElementById("nav");
			let getRight = window
				.getComputedStyle(nav, null)
				.getPropertyValue("right");
			getRight == "0px"
				? (nav.style.right = "-254px")
				: (nav.style.right = "0");
			console.log(getRight);
		}
	};

	return (
		<header>
			<img src={require("../assets/shared/logo.svg").default} id="homeIcon" />
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
					>
						<span>00</span>HOME
					</li>
					<li
						className={`navListItems ${props.page === 1 ? "selectedPage" : ""}`}
						id="navDestination"
					>
						<span>01</span>DESTINATION
					</li>
					<li
						className={`navListItems ${props.page === 2 ? "selectedPage" : ""}`}
						id="navCrew"
					>
						<span>02</span>CREW
					</li>
					<li
						className={`navListItems ${props.page === 3 ? "selectedPage" : ""}`}
						id="navTechnology"
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
