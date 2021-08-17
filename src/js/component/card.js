import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Card = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col-md-4 mb-3">
			<div className="card">
				<img src={props.url} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<div className="card-text">
						{props.contenido.map((item, index) => {
							return (
								<p key={index}>
									{item.label}: {item.value}
								</p>
							);
						})}
					</div>
					<div className="row justify-content-between">
						<a href={props.link} className="btn btn-dark" style={{ color: "#fff" }}>
							Read More
						</a>
						<button onClick={() => actions.setFavs(props.title)} className="btn btn-outline-warning ml-a">
							<i className="far fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	url: PropTypes.string,
	link: PropTypes.string,
	title: PropTypes.string,
	contenido: PropTypes.array
};
