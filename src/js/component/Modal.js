import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import propTypes from "prop-types";

export const Modal = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(Context); // copiar para que funcione flux

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							//  PUT: /apis/fake/contact/{contact_id}

							//  Request (application/json)

							// 	 body:
							// 	 {
							// 		 "full_name": "Dave Bradley",
							// 		 "email": "dave@gmail.com",
							// 		 "agenda_slug": "my_super_agenda",
							// 		 "address":"47568 NW 34ST, 33434 FL, USA",
							// 		 "phone":"7864445566"
							// 	 }
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Oh no!
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={() => actions.eliminarContactos(props.id)}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: propTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
