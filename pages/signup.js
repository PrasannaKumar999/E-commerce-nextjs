import { signUpStyles } from "@/styles/signupStyled";
import React, { useEffect, useState } from "react";

const signup = () => {
	const [screen, setScreen] = useState("signup");

	return (
		<>
			<style jsx>{signUpStyles}</style>

			<div className="signupContainer">
				<div className="leftContainer">
					<img
						src="/dl.beatsnoop.png"
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
				<div className="rightContainer">
					{/* { screen == 'signup' ? ( */}
					<>
						<div className="head">
							{screen === "signup"
								? "Create an account"
								: "Log in to Exclusive"}
						</div>
						<div>Enter your details below</div>
						{screen === "signup" ? (
							<>
								<div className="inputSection">
									<div className="inputs">
										<input placeholder="Name" />
									</div>
									<div className="inputs">
										<input placeholder="Email or Phone Number" />
									</div>
									<div className="inputs">
										<input placeholder="Password" />
									</div>
								</div>

								<div style={{ paddingTop: "40px" }}>
									<div className="ctaButtonActive">Create Account</div>
									<div className="ctaButton">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="25"
											viewBox="0 0 24 25"
											fill="none">
											<g clip-path="url(#clip0_1092_3336)">
												<path
													d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
													fill="#4285F4"
												/>
												<path
													d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
													fill="#34A853"
												/>
												<path
													d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
													fill="#FBBC04"
												/>
												<path
													d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
													fill="#EA4335"
												/>
											</g>
											<defs>
												<clipPath id="clip0_1092_3336">
													<rect
														width="24"
														height="24"
														fill="white"
														transform="translate(0 0.5)"
													/>
												</clipPath>
											</defs>
										</svg>
										<span>Sign up with Google</span>
									</div>
									<div className="bottomText">
										<div>Already have account?</div>
										<div
											className="textLogin"
											onClick={() => setScreen("login")}>
											Log in
										</div>
									</div>
								</div>
							</>
						) : (
							<>
								<div className="inputSection">
									<div className="inputs">
										<input placeholder="Email or Phone Number" />
									</div>
									<div className="inputs">
										<input placeholder="Password" />
									</div>
								</div>
								<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"40px"}}>
									<div className="ctaButtonActive">Login</div>
									<div className="textForgetPass">Forget Password?</div>
								</div>
								<div className="bottomText">
									<div>Dont have an account?</div>
									<div
										className="textLogin"
										onClick={() => setScreen("signup")}>
										Sign Up
									</div>
								</div>
							</>
						)}
					</>
				</div>
			</div>
		</>
	);
};

export default signup;
