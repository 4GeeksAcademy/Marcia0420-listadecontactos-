import React, { useState, useEffect, useContext } from "react"; // copiar para que funcione flux
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; // copiar para que funcione flux

export const AddContact = () => {
	const { store, actions } = useContext(Context); // copiar para que funcione flux
	const [nombre, setNombre] = useState("");
	const [mail, setMail] = useState("");
	const [direccion, setDireccion] = useState("");
	const [telefono, setTelefono] = useState("");

	const agragarContacto = () => {
		actions.guardarContacto(nombre, mail, direccion, telefono);
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={nombre}
							onChange={function(e) {
								setNombre(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={mail}
							onChange={function(e) {
								setMail(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={telefono}
							onChange={function(e) {
								setTelefono(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={direccion}
							onChange={function(e) {
								setDireccion(e.target.value);
							}}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={agragarContacto}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
