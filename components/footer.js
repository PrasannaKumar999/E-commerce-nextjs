import { footerStyles } from "@/styles/footerStyled";
import React from "react";

const Footer = () => {
	return (
		<>
			<style jsx>{footerStyles}</style>
			<div className="footerMainContainer">
				<div className="footerContainer">
					<div className="footer">
						<div className="footerRow">
							<div className="textExclusive">Exclusive</div>
							<div>Subscribe</div>
							<div>Get 10% off your first order</div>
							<div>
								<input type="email" placeholder="Enter your email" />
							</div>
						</div>

						<div className="footerRow">
							<div className="footerHeading">Support</div>
							<div>
								111 Bijoy Sarani, Dhaka,
								<br />
								DH 1515, Bangladesh.
							</div>
							<div>exclusive@gmail.com</div>
							<div>+88015-88888-9999</div>
						</div>

						<div className="footerRow">
							<div className="footerHeading">Account</div>
							<div>My Account</div>
							<div>Login / Register</div>
							<div>Cart</div>
							<div>Wishlist</div>
							<div>Shop</div>
						</div>

						<div className="footerRow">
							<div className="footerHeading">Quick Link</div>
							<div>Privacy Policy</div>
							<div>Terms Of Use</div>
							<div>FAQ</div>
							<div>Contact</div>
						</div>

						<div className="footerRow">
							<div className="footerHeading">Download App</div>
							<div className="textSave">Save $3 with App New User Only</div>
							<div style={{ display: "flex", gap: "10px" }}>
								<div>
									<img src="/qrCode.png" />
								</div>
								<div>
									<div>
										<img src="/GooglePlay.png" style={{ width: "100%" }} />
									</div>
									<div>
										<img src="/AppStore.png" style={{ width: "100%" }} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footerbottom">
						<div style={{paddingTop:"12px"}}>Copyright Rimel 2022. All rights reserved.</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
