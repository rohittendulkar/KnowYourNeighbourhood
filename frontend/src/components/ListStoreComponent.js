import React, { Component } from "react";
import StoreService from "../services/StoreService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEdit,
	faPlus,
	faEye,
	faSearch,
	faTrash,
	faSignOutAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/loginpage.css";
import AuthService from "../services/AuthService";

class ListStoreComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { storelist: [] };
		this.addStore = this.addStore.bind(this);
		this.viewStore = this.viewStore.bind(this);
		this.editStore = this.editStore.bind(this);
		this.deleteStore = this.deleteStore.bind(this);
	}

	deleteStore(id) {
		StoreService.deleteStore(id).then(() => {
			let storelist = this.state.storelist.filter((store) => store.id !== id);
			this.setState({ storelist });
			// let storelist = this.state.storelist;
			// storelist.data.filter((store) => store.id !== id);
			// this.setState({ storelist: storelist });
		});
	}

	viewStore(sid) {
		console.log("This is update Store" + sid);
		this.props.history.push(`view-stores/${sid}`);
	}

	addStore() {
		this.props.history.push(`add-stores/add`);
	}

	searchStore() {
		this.props.history.push(`/search`);
	}

	editStore(sid) {
		console.log("This is update Store" + sid);
		this.props.history.push(`add-stores/${sid}`);
	}

	componentDidMount() {
		StoreService.getStores().then((resp) => {
			this.setState({ storelist: resp.data });
		});
	}

	render() {
		return (
			<div className="marco">
				<h2
					className="text-center"
					style={{ marginTop: "20px", marginBottom: "20px" }}
				>
					Store List
				</h2>
				<div className="d-flex justify-content-center">
					<button
						className="btn btn-success"
						onClick={this.addStore}
						style={{ marginLeft: "10px" }}
					>
						Add Store &nbsp;
						<FontAwesomeIcon icon={faPlus} />
					</button>
					<button
						className="btn btn-info"
						onClick={this.searchStore.bind(this)}
						style={{ marginLeft: "10px" }}
					>
						Search Store &nbsp;
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
				<br></br>
				<div className="row">
					<table className="table table-striped table-bordered">
						<thead>
							<tr className="text-center">
								<th>Store ID</th>
								<th> Store Name </th>
								<th> Store Location</th>
								<th> Store Phone Number</th>
								<th> Store Description</th>
								<th> Actions</th>
							</tr>
						</thead>
						<tbody className="text-center">
							{this.state.storelist.map((store) => (
								<tr key={store.id}>
									<td> {store.id} </td>
									<td> {store.storename} </td>
									<td> {store.storelocation}</td>
									<td> {store.phoneno}</td>
									<td> {store.description}</td>
									<td>
										<button
											style={{ marginLeft: "10px" }}
											onClick={() => this.viewStore(store.id)}
											className="btn btn-warning"
										>
											View &nbsp; <FontAwesomeIcon icon={faEye} />
										</button>
										<button
											style={{ marginLeft: "10px" }}
											onClick={() => this.editStore(store.id)}
											className="btn btn-success"
										>
											Update &nbsp; <FontAwesomeIcon icon={faEdit} />
										</button>
										<button
											style={{ marginLeft: "10px" }}
											onClick={() => this.deleteStore(store.id)}
											className="btn btn-danger"
										>
											Delete &nbsp;
											<FontAwesomeIcon icon={faTrash} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default ListStoreComponent;
