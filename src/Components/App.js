import "../CSS/App.css";
import React, { useState, useEffect } from "react";
import Page00 from "./Page00";
import Page01 from "./Page01";
import Page02 from "./Page02";
import Page03 from "./Page03";
import { useWindowDimensions } from "./Mediaquery";

function App() {
	const [page, setPage] = useState(0);
	const [destinationCount, setDestinationCount] = useState(0);
	const [data, setData] = useState(null);
	const [crewMember, setCrewMember] = useState(0);
	const [technologyCount, setTechnologyCount] = useState(0);
	const [view, setView] = useState('');

	const { width } = useWindowDimensions();

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		setView(returnView());
	}, [width]);


	const getData = () => {
		fetch("data.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setData(myJson);
			});
	};

	function returnView() {
		if(width < 767) {
			return 'mobile';
		} else if(width >= 767 && width < 1024) {
			return 'tablet';
		} else if(width >= 1024) {
			return 'desktop';
		}
	}

	const pageToRender = () => {
		switch (page) {
			case 0:
				return <Page00 currentPage={page} setPage={setPage} view={view} />;

			case 1:
				return (
					<Page01
						currentPage={page}
						setPage={setPage}
						destinationCount={destinationCount}
						setDestinationCount={setDestinationCount}
						data={data}
						view={view}
					/>
				);

			case 2:
				return (
					<Page02
						currentPage={page}
						setPage={setPage}
						data={data}
						crewMember={crewMember}
						setCrewMember={setCrewMember}
						view={view}
					/>
				);

			case 3:
				return (
					<Page03
						currentPage={page}
						setPage={setPage}
						data={data}
						technologyCount={technologyCount}
						setTechnologyCount={setTechnologyCount}
						view={view}
					/>
				);

			default:
				break;
		}
	};
	if (data === null) {
		return <div></div>;
	}
	return <div id="appWrapper">{pageToRender()}</div>;
}

export default App;
