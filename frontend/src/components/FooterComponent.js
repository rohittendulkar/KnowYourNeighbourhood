import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import "../styles/footer.css";
class FooterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<footer className="footer footer-expand footer-primary bg-light text-center">
					<div class="row p-4">
						<div class="col-md-3 d-flex justify-content-start">
							<a class="navbar-brand" href="/">
								<FontAwesomeIcon icon={faUserFriends} />
								&nbsp;KYN
							</a>
						</div>
						<div class="col-md-6 d-flex justify-content-around	">
							<a class="nav-link" href="#">
								Mobile App
							</a>
							<a class="nav-link" href="#">
								Community
							</a>
							<a class="nav-link" href="#">
								Company
							</a>
						</div>
						<div class="col-md-3 d-flex justify-content-end">
							© KYN Inc. 2021. We love our users!
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
export default FooterComponent;
