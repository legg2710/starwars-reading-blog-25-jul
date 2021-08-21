import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.listaVehicles();
	}, []);

	return (
		<div className="container">
			<h1>Vehicles</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.vehicleList.map((item, index) => {
					const dataVehicle = [
						{
							label: "Model",
							value: item.model
						},
						{
							label: "Class",
							value: item.vehicle_class
						}
					];
					let linkUrl = index + 1;

					return (
						<Card
							key={index}
							url="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
							title={item.name}
							link={" https://www.swapi.tech/api/starships/9" + linkUrl}
							contenido={dataVehicle}
						/>
					);
				})}
			</div>
		</div>
	);
};
