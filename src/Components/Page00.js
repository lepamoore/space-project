import React from "react";
import "../CSS/Page00.css";
import Navbar from "./Navbar";

export default function Page00(props) {
	return (
		<div id="wrapper00">
			<Navbar
				currentPage={props.currentPage}
				setPage={props.setPage}
				id="navbar00"
				view={props.view}
			/>
			<div id="detailsContainer00">
				<div id="detailsContainerChild00">
					<span id="headSpan00">So, you want to travel to</span>
					<h1 id="heading00">Space</h1>
					<p id="bodyText00">
						Let’s face it: if you want to go to space, you might as well genuinely
						go to outer space and not hover kind of on the edge of it. Well sit
						back, and relax because we’ll give you a truly out of this world
						experience!
					</p>
				</div>
			</div>
			<div id="whiteBallContainer00">
				<div id="whiteBall00">
					<span id="whiteBallText00">explore</span>
				</div>
			</div>
		</div>
	);
}
