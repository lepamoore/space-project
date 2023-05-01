import "../CSS/App.css";
import React, { useState, useEffect } from "react";
import Page00 from "./Page00";
import Page01 from "./Page01";

function App() {
	const [page, setPage] = useState(0);
	const [destinationCount, setDestinationCount] = useState(0);
	const [data, setData] = useState(null);

	useEffect(() => {
		getData();
	}, []);

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

	const pageToRender = () => {
		switch (page) {
			case 0:
				return <Page00 currentPage={page} setPage={setPage} />;

			case 1:
				return (
					<Page01
						currentPage={page}
						setPage={setPage}
						destinationCount={destinationCount}
						setDestinationCount={setDestinationCount}
						data={data}
					/>
				);

			default:
				break;
		}
	};
	if(data === null) {
		return <div></div>;
	}
	return <div id="appWrapper">{pageToRender()}</div>;
}

export default App;
