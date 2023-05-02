import React, {useState} from "react";
import "../CSS/Page01.css";
import Navbar from "./Navbar";
import moonImg from "../assets/destination/image-moon.webp";
import marsImg from "../assets/destination/image-mars.webp";
import europaImg from "../assets/destination/image-europa.webp";
import titanImg from "../assets/destination/image-titan.webp";


export default function Page01(props) {
	function selectPlanetImg() {
		if(props.data.destinations[props.destinationCount].name === 'Moon') {
			return moonImg;
		} else if(props.data.destinations[props.destinationCount].name === 'Mars') {
			return marsImg;
		} else if(props.data.destinations[props.destinationCount].name === 'Europa') {
			return europaImg;
		} else if(props.data.destinations[props.destinationCount].name === 'Titan') {
			return titanImg;
		}
	}

	function addActiveClass(countShouldMatch) {
		if(props.destinationCount === countShouldMatch) {
			return "activePlanetNameLink";
		} else {
			return "";
		}
	}

 	return (
		<div id="wrapper01">
			<div id="dvh100Container">
				<Navbar currentPage={props.currentPage} setPage={props.setPage} id="navbar01"/>
				<div className="detailsContainer01" id="imgDetails01">
					<span id="spanHeading01">
						<span id="spanHeadingNumber01">01</span>Pick your destination
					</span>
					<img src={selectPlanetImg()} alt={props.data.destinations[props.destinationCount].name} id="planetImg" />
				</div>
                <div className="detailsContainer01" id="textDetails01">
					<ul id="planetNameList">
						<li className={`planetNameLinks ${addActiveClass(0)}`} onClick={() => props.setDestinationCount(0)}>Moon</li>
						<li className={`planetNameLinks ${addActiveClass(1)}`} onClick={() => props.setDestinationCount(1)}>Mars</li>
						<li className={`planetNameLinks ${addActiveClass(2)}`} onClick={() => props.setDestinationCount(2)}>Europa</li>
						<li className={`planetNameLinks ${addActiveClass(3)}`} onClick={() => props.setDestinationCount(3)}>Titan</li>
					</ul>
					<h2 id="heading01">{props.data.destinations[props.destinationCount].name}</h2>
                    <p id="bodyText01">
						{props.data.destinations[props.destinationCount].description}
                    </p>
                </div>
				<hr id="hr01" />
			</div>
			<div className="detailsContainer01">
				<div className="detailsContainer01 marginTop01">
					<span className="travelHeadings01">avg. distance</span>
					<span className="travelDetails01">
						{props.data.destinations[props.destinationCount].distance}
					</span>
				</div>
				<div className="detailsContainer01 margin01">
					<span className="travelHeadings01">est. travel time</span>
					<span className="travelDetails01">
						{props.data.destinations[props.destinationCount].travel}
					</span>				
				</div>
			</div>
		</div>
	);
}