import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.listaPlanets();
	}, []);

	return (
		<div className="container">
			<h1>Planets</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.planetList.map((item, index) => {
					const dataPlanet = [
						{
							label: "Terrain",
							value: item.terrain
						},
						{
							label: "Population",
							value: item.population
						}
					];
					let linkUrl = index + 1;
					return (
						<Card
							key={index}
							url="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
							title={item.name}
							link={"https://swapi.dev/api/planets/" + linkUrl}
							contenido={dataPlanet}
						/>
					);
				})}
			</div>
		</div>
	);
};
