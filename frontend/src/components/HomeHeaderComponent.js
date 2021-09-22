import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import AuthService from "../services/AuthService";

class HomeHeaderComponent extends Component {
	constructor(props) {
		super(props);
		this.logOut = this.logOut.bind(this);

		this.state = {
			currentUser: false,
		};
	}

	componentDidMount() {
		const user = AuthService.getCurrentUser();

		if (user) {
			this.setState({
				currentUser: user,
			});
		}
	}

	logOut() {
		AuthService.logout();
	}
	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-primary bg-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="/">
						<FontAwesomeIcon icon={faUserFriends} />
						&nbsp;KYN
					</a>
					<div class="collapse navbar-collapse" id="navbarColor01">
						<ul class="navbar-nav me-auto">
							<li class="nav-item">
								<a class="nav-link active" href="/">
									Home
								</a>
							</li>
							{this.state.currentUser && (
								<li class="nav-item">
									<a class="nav-link" href="/store">
										Store
									</a>
								</li>
							)}
							<li class="nav-item">
								<a class="nav-link" href="/about">
									About Us
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/contact">
									Contact Us
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/privacy-policy">
									Privacy Policy
								</a>
							</li>
						</ul>
						{this.state.currentUser == false && (
							<a href="/register">
								<button class="btn btn-outline-primary me-sm-2" type="submit">
									Register
								</button>
							</a>
						)}
						{this.state.currentUser == false && (
							<a href="/login">
								<button class="btn btn-outline-primary me-sm-2" type="submit">
									Log In
								</button>
							</a>
						)}
						{this.state.currentUser && (
							<a href="/">
								<button
									class="btn btn-outline-primary me-sm-2"
									type="submit"
									onClick={this.logOut}
									style={{ cursor: "pointer" }}
								>
									Log Out {this.state.currentUser.username}
								</button>
							</a>
						)}
					</div>
				</div>
			</nav>
		);
	}
}

export default HomeHeaderComponent;
