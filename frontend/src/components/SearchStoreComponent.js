import React, { Component } from "react";
import StoreService from "../services/StoreService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faSearch,
	faEye,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/loginpage.css";

class SearchStoreComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Store: [],
			keyword: this.props.match.params.keyword,
		};

		this.searchStore = this.searchStore.bind(this);
	}

	viewStore(storeId) {
		this.props.history.push(`/view-stores/${storeId}`);
	}

	componentDidMount() {
		StoreService.searchStore(this.state.keyword).then((res) => {
			this.setState({ Store: res.data });
		});
	}

	changeSearchHandler = (event) => {
		console.log(event.target.value);
		this.setState({ keyword: event.target.value });
	};

	searchStore(keyword) {
		console.log("search Store Method " + keyword);
		this.props.history.push(`/search-stores/${keyword}`);
	}

	back() {
		this.props.history.push("/store");
	}

	render() {
		return (
			<div className="marco">
				<h3
					className="text-center"
					style={{ marginBottom: "20px", marginTop: "20px" }}
				>
					Search Store Results
				</h3>
				<div className="container">
					<form
						className="form-inline d-flex justify-content-center"
						style={{ marginTop: "20px", marginBottom: "20px" }}
					>
						<div className="form-group">
							<button
								className="btn btn-primary"
								onClick={this.back.bind(this)}
								style={{ marginRight: "20px" }}
							>
								<FontAwesomeIcon icon={faArrowLeft} />
								&nbsp;Back to Store List
							</button>
						</div>
						<div class="form-group">
							{this.state.Store == false ? (
								<input
									className="form-control border-danger"
									type="search"
									placeholder="Search"
									aria-label="Search"
									value={this.state.keyword}
									onChange={this.changeSearchHandler}
								/>
							) : (
								<input
									className="form-control"
									type="search"
									placeholder="Search"
									aria-label="Search"
									value={this.state.keyword}
									onChange={this.changeSearchHandler}
								/>
							)}
						</div>
						<div class="form-group">
							<button
								onClick={() => this.searchStore(this.state.keyword)}
								className="btn btn-outline-success my-2 my-sm-0 "
								style={{ marginLeft: "10px" }}
							>
								Search &nbsp;
								<FontAwesomeIcon icon={faSearch} />
							</button>
						</div>
					</form>
				</div>

				<div className="row">
					<table className="table table-striped table-bordered">
						<thead>
							<tr className="text-center">
								<th>Store ID</th>
								<th> Store Name</th>
								<th> Store Location</th>
								<th> Store Phone Number</th>
								<th> Store Description</th>
								<th> Actions</th>
							</tr>
						</thead>
						<tbody className="text-center">
							{this.state.Store.map((store) => (
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

export default SearchStoreComponent;
