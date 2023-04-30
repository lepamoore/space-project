import "../CSS/App.css";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import Page00 from "./Page00";

function App() {
	const [page, setPage] = useState(0);

	const pageToRender = () => {
		switch (page) {
			case 0:
				return <Page00 currentPage={page} />;
				break;

			default:
				break;
		}
	};

	return <div id="appWrapper">{pageToRender()}</div>;
}

export default App;
