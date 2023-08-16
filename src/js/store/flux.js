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
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda");
					let data = await response.json();
					console.log(data);

					setStore({ contacts: data.results });
					// setStore({propiedad:el valor que quieren actualizar})
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
