import React, { Component } from "react";
import StoreService from "../services/StoreService";
import AuthService from "../services/AuthService";
import FacebookLoginWithButton from "react-facebook-login/dist/facebook-login-render-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "../styles/loginpage.css";

const componentClicked = () => {
	console.log("Clicked!");
};

const LoginButton = ({ facebookResponse }) => (
	<FacebookLoginWithButton
		appId="1479609215714582"
		appSecret="6b8ebf011c9b9271332b1a79c4061d0e"
		/* autoLoad */
		fields="name,email,picture"
		// scope="public_profile,user_friends"
		onClick={componentClicked}
		callback={facebookResponse}
		render={(renderProps) => (
			<button
				class="btn btn-outline-primary"
				onClick={renderProps.onClick}
				style={{ marginLeft: "10px" }}
			>
				<FontAwesomeIcon icon={faFacebookF} />
				&nbsp; Login With Facebook
			</button>
		)}
	/>
);

class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: false,
			uname: "",
			pass: "",
			error_message: "",
		};
		this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
		this.passwordChangeHandler = this.passwordChangeHandler.bind(this);

		this.loginUser = this.loginUser.bind(this);
	}

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

	loginUser = (event) => {
		event.preventDefault();
		console.log("Login User Method");

		let userobj = {
			userName: this.state.uname,
			password: this.state.pass,
		};
		console.log("loginuser => " + JSON.stringify(userobj));

		AuthService.login(userobj).then(
			() => {
				this.props.history.push("/store");
				window.location.reload();
			},
			(error) => {
				const resMessage =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();

				this.setState({
					errorMessage: resMessage,
				});
			}
		);
	};

	cancel() {
		this.props.history.push("/");
	}

	facebookResponse = (response) => {
		localStorage.setItem("user", JSON.stringify(response));
		this.setState({ ...this.state, user: response });
		this.props.history.push("/fbdata");
	};

	render() {
		return (
			<div className="container marco">
				<div className="row">
					<div className="card col-md-6 offset-md-3 offset-md-3 border-primary">
						<h3 className="text-center" style={{ marginTop: "20px" }}>
							Login
						</h3>

						<div className="card-body">
							<form>
								<div className="form-group" style={{ marginBottom: "20px" }}>
									{this.state.errorMessage && (
										<div className="alert alert-danger" role="alert">
											{" "}
											{this.state.errorMessage}{" "}
										</div>
									)}
								</div>
								<div className="form-group" style={{ marginBottom: "20px" }}>
									<label style={{ marginBottom: "20px" }}> Username: </label>
									<input
										placeholder="Username"
										name="uname"
										className="form-control"
										value={this.state.uname}
										onChange={this.usernameChangeHandler}
									/>
								</div>

								<div className="form-group" style={{ marginBottom: "20px" }}>
									<label style={{ marginBottom: "20px" }}> Password: </label>
									<input
										placeholder="Password"
										name="pass"
										className="form-control"
										value={this.state.pass}
										onChange={this.passwordChangeHandler}
									/>
								</div>
								<div className="my-2">
									<button
										className="btn btn-outline-primary"
										onClick={this.loginUser}
										style={{}}
									>
										Login
									</button>
									{this.state.user == false && (
										<LoginButton facebookResponse={this.facebookResponse} />
									)}
									<button
										className="btn btn-outline-danger"
										onClick={this.cancel.bind(this)}
										style={{ marginLeft: "10px" }}
									>
										Cancel
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginComponent;
