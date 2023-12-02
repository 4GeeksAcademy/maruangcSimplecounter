import React from "react";

//create your first component
const Home = ({seconds}) => {
	return (
		<div className="d-flex p-2 text-light justify-content-center fs-1">
			<div className="p-2 bg-dark">{Math.floor(seconds / 100000) % 10}</div>
			<div className="p-2 bg-dark">{Math.floor(seconds / 10000) % 10}</div>
			<div className="p-2 bg-dark">{Math.floor(seconds / 1000) % 10}</div>
			<div className="p-2 bg-dark">{Math.floor(seconds / 100) % 10}</div>
			<div className="p-2 bg-dark">{Math.floor(seconds / 10) % 10}</div>
			<div className="p-2 bg-dark">{Math.floor(seconds / 1) % 10}</div>
		</div>
	);
};

export default Home;
