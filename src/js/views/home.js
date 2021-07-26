import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "./characters";
import { Vehicles } from "./vehicles";
import { Planets } from "./planets";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.setHome(true);
		console.log("home: ", store.isHome);
	}, []);

	console.log("Favorite List ", store.favList);

	return (
		<div className="container">
			<div className="row">
				<Characters />
			</div>
			<div className="row">
				<Vehicles />
			</div>
			<div className="row">
				<Planets />
			</div>
		</div>
	);
};
