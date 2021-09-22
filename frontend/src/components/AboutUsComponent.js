import React, { Component } from "react";
import "../styles/homepage.css";
import "../styles/loginpage.css";
import "../styles/about.css";

export default class AboutUsComponent extends Component {
	render() {
		return (
			<div>
				<div class="body-e">
					<div class="image2"></div>
					<div class="flex-col">
						<h1 class="text-1montserrat-bold-black-24px">
							Sed ut perspiciatis unde omnis
						</h1>
						<div class="text-2montserrat-normal-black-18px">
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
						</div>
					</div>
				</div>
				<div class="body-f">
					<div class="flex-col">
						<h1 class="text-1montserrat-bold-black-24px">
							Sed ut perspiciatis unde omnis
						</h1>
						<div class="text-2montserrat-normal-black-18px">
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
						</div>
					</div>
					<div class="image3"></div>
				</div>
			</div>
		);
	}
}
