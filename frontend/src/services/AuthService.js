import axios from "axios";

const API_URL = "http://localhost:8080/login";

class AuthService {
	//after login, we need to save the key/token in local storage
	login(user) {
		return axios.post(API_URL, user).then((response) => {
			console.log("In Service " + JSON.stringify(response.data.username));
			if (response.data.accessToken) {
				localStorage.setItem("user", JSON.stringify(response.data));
			}
			return response.data;
		});
	}

	// delete the key
	logout() {
		localStorage.removeItem("user");
	}

	register(user) {
		console.log("Register New User");
		return axios.post("http://localhost:8080/user/register", user);
	}

	getCurrentUser() {
		return JSON.parse(localStorage.getItem("user"));
	}
}

export default new AuthService();
