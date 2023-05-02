import React, { useEffect } from "react";
import "../CSS/Page02.css";
import Navbar from "./Navbar";
import douglasImg from "../assets/crew/image-douglas-hurley.webp";
import ansariImg from "../assets/crew/image-anousheh-ansari.webp";
import markImg from "../assets/crew/image-mark-shuttleworth.webp";
import victorImg from "../assets/crew/image-victor-glover.webp";

export default function Page02(props) {
    function addActiveClass02(currentState) {
        if(props.crewMember === currentState) {
            return "activeDot";
        } else {
            return "";
        }
    }

    function returnImage02() {
        switch (props.crewMember) {
            case 0:
                return douglasImg;
            
            case 1:
                return markImg;
            
            case 2:
                return victorImg;
            
            case 3:
                return ansariImg;
        
            default:
                break;
        }
    }

	return (
		<div id="wrapper02">
			<Navbar currentPage={props.currentPage} setPage={props.setPage} />
			<div className="detailsContainer02" id="imgDetails02">
				<span id="spanHeading02">
					<span id="spanHeadingNumber02">02</span>Meet your crew
				</span>
				<img src={returnImage02()} alt={`Image of ${props.data.crew[props.crewMember].name}`} id="crewImg" />
				<hr id="hr02" />
			</div>
            <div className="detailsContainer02" id="dotList02">
                <div className={`divDots02 ${addActiveClass02(0)}`} onClick={() => props.setCrewMember(0)}></div>
                <div className={`divDots02 ${addActiveClass02(1)}`} onClick={() => props.setCrewMember(1)}></div>
                <div className={`divDots02 ${addActiveClass02(2)}`} onClick={() => props.setCrewMember(2)}></div>
                <div className={`divDots02 ${addActiveClass02(3)}`} onClick={() => props.setCrewMember(3)}></div>
            </div>
			<div className="detailsContainer02" id="textDetails02">
                <span id="crewPosition02">
                {props.data.crew[props.crewMember].role}
                </span>
                <span id="crewName02">
                {props.data.crew[props.crewMember].name}
                </span>
                <p id="crewDescription02">
                    {props.data.crew[props.crewMember].bio}
                </p>
            </div>
		</div>
	);
}
