import React, { Component } from "react";
import StoreService from "../services/StoreService";
import "../styles/loginpage.css";

class ViewStoreComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.sid,
			store: {},
		};
	}

	componentDidMount() {
		StoreService.viewStore(this.state.id).then((resp) => {
			console.log("response data from backend " + JSON.stringify(resp.data));
			this.setState({ store: resp.data });
		});
	}

	render() {
		return (
			<div className="marco">
				<br></br>
				<div className="card col-md-6 offset-md-3 border-primary">
					<h3
						className="text-center"
						style={{ marginTop: "20px", marginBottom: "20px" }}
					>
						View Store Details
					</h3>
					<div className="card-body">
						<div
							className="row-inline text-center"
							style={{ marginBottom: "20px" }}
						>
							<label> Store Name: </label>
							<div
								class="d-inline p-2 bg-primary text-white"
								style={{ marginLeft: "20px" }}
							>
								{this.state.store.storename}
							</div>
						</div>
						<div
							className="row-inline text-center"
							style={{ marginBottom: "20px" }}
						>
							<label> Store Location: </label>
							<div
								class="d-inline p-2 bg-primary text-white"
								style={{ marginLeft: "20px" }}
							>
								{this.state.store.storelocation}
							</div>
						</div>
						<div
							className="row-inline text-center"
							style={{ marginBottom: "20px" }}
						>
							<label> Store Phone Number: </label>
							<div
								class="d-inline p-2 bg-primary text-white"
								style={{ marginLeft: "20px" }}
							>
								{this.state.store.phoneno}
							</div>
						</div>
						<div
							className="row-inline text-center"
							style={{ marginBottom: "20px" }}
						>
							<label> Description: </label>
							<div
								class="d-inline p-2 bg-primary text-white"
								style={{ marginLeft: "20px" }}
							>
								{this.state.store.description}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ViewStoreComponent;
