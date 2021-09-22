import React, { Component } from "react";
import "../styles/loginpage.css";

class FbDataComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
		};
	}

	componentDidMount() {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			this.setState({ user: user });
		}
	}
	render() {
		const UserScreen = ({ user }) => (
			<>
				<img
					src={user.picture.data.url}
					height="12%"
					width="12%"
					alt="avatar"
					style={{ borderRadius: "50%", marginBottom: "5%" }}
				/>
				<h3 style={{ marginBottom: "5%" }}>Welcome {user.name}!</h3>
				<p style={{ marginBottom: "5%" }}>{user.email}</p>
			</>
		);
		return (
			<div style={{ marginTop: "20%", marginBottom: "20%" }}>
				{this.state.user && (
					<div
						className="card col-md-6 offset-md-3 offset-md-3 border-primary"
						style={{
							display: "flex-column",
							alignItems: "center",
							padding: "10%",
						}}
					>
						<UserScreen user={this.state.user} />
					</div>
				)}
			</div>
		);
	}
}

export default FbDataComponent;
