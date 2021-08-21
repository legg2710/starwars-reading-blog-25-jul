const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleList: [],
			planetList: [],
			vehicleList: [],
			favList: [],
			isHome: ""
		},
		actions: {
			listaCharacters: () => {
				fetch("https://www.swapi.tech/api/people/1", {
					method: "GET"
				})
					.then(res => res.json())
					.then(data => setStore({ peopleList: data.results }));
			},

			listaPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/3", {
					method: "GET"
				})
					.then(res => res.json())
					.then(data => setStore({ planetList: data.results }));
			},

			listaVehicles: () => {
				fetch("https://www.swapi.tech/api/starships/9", {
					method: "GET"
				})
					.then(res => res.json())
					.then(data => setStore({ vehicleList: data.results }));
			},

			setHome: status => {
				setStore({ isHome: status });
			},

			setFavs: fav => {
				const store = getStore();
				setStore({ favList: [...store.favList, fav] });
			}
		}
	};
};

export default getState;
