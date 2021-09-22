import React, { Component } from "react";
import StoreService from "../services/StoreService";
import AuthService from "../services/AuthService";
import "../styles/loginpage.css";

class RegisterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			uname: "",
			pass: "",
			uemail: "",
		};
		this.nameChangeHandler = this.nameChangeHandler.bind(this);
		this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
		this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
		this.emailChangeHandler = this.emailChangeHandler.bind(this);

		this.saveUser = this.saveUser.bind(this);
	}

	nameChangeHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ name: event.target.value });
	};

	usernameChangeHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ uname: event.target.value });
	};

	passwordChangeHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ pass: event.target.value });
	};

	emailChangeHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ uemail: event.target.value });
	};

	saveUser = (event) => {
		event.preventDefault();
		console.log("Register User Method");

		let userobj = {
			name: this.state.name,
			userName: this.state.uname,
			password: this.state.pass,
			email: this.state.uemail,
		};

		console.log("This is save method " + this.state.id);
		AuthService.register(userobj).then((resp) => {
			console.log("the response from spring is " + JSON.stringify(resp.data));
			console.log("the response from usrobj is " + JSON.stringify(userobj));
			if (resp.status == 200) {
				this.props.history.push("/login");
			} else {
				this.props.history.push("/register");
			}
		});
	};

	cancel() {
		this.props.history.push("/");
	}

	render() {
		return (
			<div className="marco">
				<br></br>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3 border-primary">
							<h3 className="text-center" style={{ marginTop: "10px" }}>
								User Registration Form
							</h3>

							<div className="card-body">
								<form>
									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}> Name: </label>
										<input
											placeholder="Name"
											name="name"
											className="form-control"
											value={this.state.name}
											onChange={this.nameChangeHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}> Username: </label>
										<input
											placeholder="Username"
											name="uname"
											className="form-control"
											value={this.state.uname}
											onChange={this.usernameChangeHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}> Password: </label>
										<input
											placeholder="Password"
											name="pass"
											className="form-control"
											value={this.state.pass}
											onChange={this.passwordChangeHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}> Email: </label>
										<input
											placeholder="Email"
											name="uemail"
											className="form-control"
											value={this.state.uemail}
											onChange={this.emailChangeHandler}
										/>
									</div>

									<button
										className="btn btn-outline-primary"
										onClick={this.saveUser}
										style={{ marginTop: "10px" }}
									>
										Register
									</button>
									<button
										className="btn btn-outline-danger"
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

export default RegisterComponent;
