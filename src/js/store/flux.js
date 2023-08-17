const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			user: null
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			obtenerInfo: async function() {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/marcia1");
					let data = await response.json();
					console.log(data);

					setStore({ contacts: data });
					// setStore({propiedad:el valor que quieren actualizar})
				} catch (error) {
					console.log(error);
				}
			},

			guardarContacto: async function (nombre,mail,direccion,telefono) {
				try {

					let contacto={
						full_name:nombre,
						email:mail,
						address:direccion,
						phone: telefono,
						agenda_slug:"marcia1"
					}
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/marcia1");
					// 		let data = await response.json();
					// 		console.log(data);

					// 		setStore({ contacts: data });
					// 		// setStore({propiedad:el valor que quieren actualizar})
				} catch (error) {
					console.log(error);
				}
			}

			// aca es un fech para agragar contacto
		}
	};
};

export default getState;
