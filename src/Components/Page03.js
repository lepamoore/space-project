import React, { useEffect } from "react";
import "../CSS/Page03.css";
import Navbar from "./Navbar";
import landscapeLaunch from "../assets/technology/image-launch-vehicle-landscape.webp";
import portraitLaunch from "../assets/technology/image-launch-vehicle-portrait.webp";
import landscapeCapsule from "../assets/technology/image-space-capsule-landscape.webp";
import portraitCapsule from "../assets/technology/image-space-capsule-portrait.webp";
import landscapeRocket from "../assets/technology/image-spaceport-landscape.webp";
import portraitRocket from "../assets/technology/image-spaceport-portrait.webp";
import { useWindowDimensions } from "./Mediaquery";


export default function Page03(props) {
	const { width } = useWindowDimensions();

	function returnImage03() {
		if(props.technologyCount === 0 && width < 1024) {
			return landscapeLaunch;
		} else if(props.technologyCount === 0 && width <= 1024) {
			return portraitLaunch;
		} else if(props.technologyCount === 1 && width < 1024) {
			return landscapeRocket;
		} else if(props.technologyCount === 1 && width <= 1024) {
			return portraitRocket;
		} else if(props.technologyCount === 2 && width < 1024) {
			return landscapeCapsule;
		} else if(props.technologyCount === 2 && width <= 1024) {
			return portraitCapsule;
		}
	}

	function addActiveClass03(stateShouldBe) {
		if(stateShouldBe === props.technologyCount) {
			return "dotsActive03";
		} else {
			return "";
		}
	}

	return (
		<div id="wrapper03">
			<Navbar currentPage={props.currentPage} setPage={props.setPage} id="navbar03" />
			<div className="detailsContainer03" id="imgDetails03">
				<span id="spanHeading03">
					<span id="spanHeadingNumber03">03</span>Space launch 101
				</span>
				<img src={returnImage03()} alt={`Image of ${props.data.technology[props.technologyCount].name}`} id="heroImg03"/>
			</div>
            <div className="detailsContainer03" id="dotList03">
                <div className={`dots03 ${addActiveClass03(0)}`} onClick={() => props.setTechnologyCount(0)}>1</div>
                <div className={`dots03 ${addActiveClass03(1)}`} onClick={() => props.setTechnologyCount(1)}>2</div>
                <div className={`dots03 ${addActiveClass03(2)}`} onClick={() => props.setTechnologyCount(2)}>3</div>
            </div>
			<div className="detailsContainer03" id="textDetails03">
                <span id="smallHeading03">The terminology...</span>
                <span id="heading03">{props.data.technology[props.technologyCount].name}</span>
                <p id="bodyText03">
					{props.data.technology[props.technologyCount].description}
                </p>
            </div>
		</div>
	);
}
