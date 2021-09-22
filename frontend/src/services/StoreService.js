import axios from "axios";
import AuthHeader from "./AuthHeader";

const STORE_API_BASE_URL = "http://localhost:8080/storecontroller/api/store";

class StoreService {
	getStores() {
		console.log("Get all Stores");
		return axios.get(STORE_API_BASE_URL, { headers: AuthHeader() });
	}

	viewStore(storeId) {
		console.log("Getting Stores By Id" + storeId);
		return axios.get(STORE_API_BASE_URL + "/" + storeId, {
			headers: AuthHeader(),
		});
	}

	createStore(store) {
		console.log("Create Store Posting");
		return axios.post(STORE_API_BASE_URL, store, { headers: AuthHeader() });
	}

	update(storeId, store) {
		console.log("Update Store Posting " + storeId);
		return axios.put(STORE_API_BASE_URL + "/" + storeId, store, {
			headers: AuthHeader(),
		});
	}

	deleteStore(storeId) {
		console.log("Delete Store Posting " + storeId);
		return axios.delete(STORE_API_BASE_URL + "/" + storeId, {
			headers: AuthHeader(),
		});
	}

	searchStore(keyword) {
		console.log("Search Store Posting " + keyword);
		return axios.get(STORE_API_BASE_URL + "/storesearch/" + keyword, {
			headers: AuthHeader(),
		});
	}
}

export default new StoreService();
