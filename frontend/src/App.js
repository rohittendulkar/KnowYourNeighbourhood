import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FooterComponent from "./components/FooterComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import HomeComponent from "./components/HomeComponent";
import HomeHeaderComponent from "./components/HomeHeaderComponent";
import ListStoreComponent from "./components/ListStoreComponent";
import ViewStoreComponent from "./components/ViewStoreComponent";
import CreateUpdateStoreComponent from "./components/CreateUpdateStoreComponent";
import SearchStoreComponent from "./components/SearchStoreComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import ContactUsComponent from "./components/ContactUsComponent";
import PrivacyPolicyComponent from "./components/PrivacyPolicyComponent";
import FbDataComponent from "./components/FbdataComponent";

function App() {
	return (
		<div>
			<Router>
				<HomeHeaderComponent />
				<div>
					<Switch>
						{/* UI */}
						<Route path="/" exact component={HomeComponent}></Route>
						<Route path="/about" exact component={AboutUsComponent}></Route>
						<Route path="/contact" exact component={ContactUsComponent}></Route>
						<Route
							path="/privacy-policy"
							exact
							component={PrivacyPolicyComponent}
						></Route>
						{/* Store Route */}
						<Route path="/store" component={ListStoreComponent}></Route>
						<Route
							path="/add-stores/:sid"
							component={CreateUpdateStoreComponent}
						></Route>
						<Route
							path="/view-stores/:sid"
							component={ViewStoreComponent}
						></Route>
						<Route
							path="/search-stores/:keyword"
							component={SearchStoreComponent}
						></Route>

						<Route path="/search" component={SearchStoreComponent}></Route>

						{/* User Route */}
						<Route path="/register" component={RegisterComponent}></Route>
						<Route path="/login" component={LoginComponent}></Route>
						<Route path="/fbdata" component={FbDataComponent}></Route>
					</Switch>
				</div>
				<FooterComponent />
			</Router>
		</div>
	);
}
export default App;
