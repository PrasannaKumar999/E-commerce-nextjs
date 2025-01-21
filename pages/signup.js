import { signUpStyles } from "@/styles/signupStyled";
import React from "react";

const signup = () => {
	return (
		<>
			<style jsx>{signUpStyles}</style>
			<div>
				<div className="signupContainer">
					<div className="leftContainer">
						<img
							src="/dl.beatsnoop.png"
							style={{ width: "100%", height: "100%" }}
						/>
					</div>
					<div className="rightContainer">
						<div className="head">Create an account</div>
						<div>Enter your details below</div>
						<div>
							<div>
								<input placeholder="test" />
							</div>
							<div>
								<input placeholder="test" />
							</div>
							<div>
								<input placeholder="test" />
							</div>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default signup;
