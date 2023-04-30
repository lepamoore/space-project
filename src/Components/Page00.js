import React, { useState } from "react";
import "../CSS/Page00.css";
import Navbar from "./Navbar";

export default function Page00(props) {
	return (
		<div id="wrapper00">
			<Navbar currentPage={props.currentPage} />
			<div id="detailsContainer00">
				<span className="headingFive">So, you want to travel to</span>
				<h1 className="headingOne">Space</h1>
				<p className="bodyText">
					Let’s face it: if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div id="whiteBallContainer00">
				<div id="whiteBall00">
					<span className="headingFour">explore</span>
				</div>
			</div>
		</div>
	);
}
