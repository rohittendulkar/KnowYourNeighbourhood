import React, { Component } from "react";
import StoreService from "../services/StoreService";
import "../styles/loginpage.css";

class CreateUpdateStoreComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.sid,
			strname: "",
			strlocation: "",
			strphone: "",
			strdesc: "",
		};
		console.log("this prints " + this.state.id);
	}

	storenameHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ strname: event.target.value });
	};

	storelocationHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ strlocation: event.target.value });
	};

	storephonenoHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ strphone: event.target.value });
	};

	descriptionHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ strdesc: event.target.value });
	};

	saveOrUpdateStore = (e) => {
		e.preventDefault();
		console.log("this is save method");

		let store = {
			storename: this.state.strname,
			storelocation: this.state.strlocation,
			phoneno: this.state.strphone,
			description: this.state.strdesc,
		};

		if (this.state.id === "add") {
			console.log("This is save method " + this.state.id);
			StoreService.createStore(store).then((resp) => {
				console.log("the response from spring is " + JSON.stringify(resp.data));
				this.props.history.push("/store");
			});
		} else {
			console.log("This is update method " + this.state.id);
			StoreService.update(this.state.id, store).then((resp) => {
				console.log("the response from spring is " + JSON.stringify(resp.data));
				this.props.history.push("/store");
			});
		}
	};

	cancel() {
		this.props.history.push("/store");
	}

	componentDidMount() {
		if (this.state.id === "add") {
			return;
		} else {
			StoreService.viewStore(this.state.id).then((resp) => {
				console.log(
					" Component Didmount the store details " + JSON.stringify(resp.data)
				);
				let store = resp.data;

				this.setState({
					strname: store.storename,
					strlocation: store.storelocation,
					strphone: store.phoneno,
					strdesc: store.description,
				});
			});
		}
	}

	render() {
		return (
			<div>
				<br></br>
				<div className="container marco">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3 border-primary">
							<h3 className="text-center" style={{ marginTop: "10px" }}>
								Store ID is {this.state.id}
							</h3>

							<div className="card-body">
								<form>
									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}>Store Name:</label>
										<input
											placeholder="Store Name"
											name="strname"
											className="form-control"
											value={this.state.strname}
											onChange={this.storenameHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}>
											{" "}
											Store Location:{" "}
										</label>
										<input
											placeholder="Store Location"
											name="strlocation"
											className="form-control"
											value={this.state.strlocation}
											onChange={this.storelocationHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}>
											Phone Number:
										</label>
										<input
											placeholder="Phone Number"
											name="strphone"
											className="form-control"
											value={this.state.strphone}
											onChange={this.storephonenoHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}>
											Store Description:
										</label>
										<input
											placeholder="Add Description"
											name="strdesc"
											className="form-control"
											value={this.state.strdesc}
											onChange={this.descriptionHandler}
										/>
									</div>

									<button
										className="btn btn-success"
										onClick={this.saveOrUpdateStore}
										style={{ marginTop: "10px" }}
									>
										Save
									</button>
									<button
										className="btn btn-danger"
										onClick={this.cancel.bind(this)}
										style={{ marginTop: "10px", marginLeft: "10px" }}
									>
										Cancel
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CreateUpdateStoreComponent;
