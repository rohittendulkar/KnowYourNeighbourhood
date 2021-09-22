import React, { Component } from "react";
import "../styles/homepage.css";

class HomeComponent extends Component {
	register() {
		this.props.history.push("/register");
	}

	render() {
		return (
			<div class="hero-e">
				<img
					class="the-largest-com-oto-enthusiasts"
					src="https://anima-uploads.s3.amazonaws.com/projects/60bb5efd2727910bbcf65ebf/img/the-largest-community-of-photo-enthusiasts@1x.png"
				/>
				<button class="button">
					<div class="join-today valign-text-middle">Join Today</div>
				</button>
			</div>
		);
	}
}

export default HomeComponent;
