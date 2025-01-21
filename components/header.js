import React, { useEffect, useState } from "react";
import { headerStyled } from "@/styles/headerStyled";
import { useRouter } from "next/router";
import { useCart } from "@/context/cartContext";
import MobileMenu from "./mobileMenu";

const Header = () => {
	const router = useRouter();
	const options = ["Home", "Contact", "About", "Sign Up"];
	const [selectedOption, setSelectedOption] = useState(null);

	const [cartItemsLength, setCartItemsLength] = useState(null);

	const { cart, dispatch } = useCart();
	const [userDropdown, setUserDropdown] = useState(false);

	useEffect(() => {
		let pathname = router.pathname;
		let path = pathname.replace("/", "");
		path = path[0].toUpperCase() + path.slice(1);
		setSelectedOption(path);
	}, [router]);

	useEffect(() => {
		setCartItemsLength(cart?.length);
	}, [cart]);

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<>
			<style jsx>{headerStyled}</style>
			<div className="headerContainer">
				<div
					className="mobileMenu"
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
					<img src="/menu.png" />
				</div>
				<div className="textExclusive" onClick={() => router.push("/home")}>
					Exclusive
				</div>
				<div className="optionsDiv">
					{options.map((ele) => (
						<div
							key={ele}
							className={`${
								selectedOption === ele ? "optionHover" : "option"
							} `}
							onClick={() => {
								setSelectedOption(ele);
								switch (ele) {
									case "Home":
										router.push("/home");
										break;
									case "Contact":
										router.push("/contact");
										break;
									case "About":
										router.push("/about");
										break;
									case "Sign Up":
										router.push("/signup");
										break;
								}
							}}>
							{ele}
						</div>
					))}
				</div>
				<div className="rightDiv">
					<div className="inputContainer">
						<input
							style={{ all: "unset" }}
							placeholder="What are you looking for?"
							onChange={(e) => {
								console.log(e?.target?.value);
							}}
						/>
						<svg
							style={{ cursor: "pointer" }}
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="24"
							viewBox="0 0 18 18"
							fill="none">
							<path
								d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
						</svg>
					</div>
					<div className="wishList">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="20"
							viewBox="0 0 22 20"
							fill="none">
							<path
								d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div
						style={{ cursor: "pointer", position: "relative" }}
						onClick={() => router.push("/cart")}>
						{cart?.length > 0 && (
							<span className="cartNumber">{cart?.length}</span>
						)}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none">
							<path
								d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M3 5H7L10 22H26"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div
						className="user"
						onClick={() => setUserDropdown(!userDropdown)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none">
							<rect width="32" height="32" rx="16" fill="#DB4444" />
							<path
								d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
								stroke="white"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
								stroke="white"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Login
					</div>
					{userDropdown && (
						<div className="usercontainer">
							<div className="rowContainer">
								<div className="icons">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none">
										<path
											d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
											stroke="#FAFAFA"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
											stroke="#FAFAFA"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<div>Manage My Account</div>
							</div>
							<div className="rowContainer">
								<div className="icons">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none">
										<path
											d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z"
											stroke="#FAFAFA"
											stroke-width="1.5"
											stroke-linejoin="round"
										/>
										<path
											d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6"
											stroke="#FAFAFA"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<div>My Order</div>
							</div>
							<div className="rowContainer">
								<div className="icons">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none">
										<g clip-path="url(#clip0_1043_458)">
											<path
												d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
												stroke="#FAFAFA"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<circle
												cx="12"
												cy="12"
												r="11.25"
												stroke="white"
												stroke-width="1.5"
											/>
										</g>
										<defs>
											<clipPath id="clip0_1043_458">
												<rect width="24" height="24" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</div>
								<div>My Cancellations</div>
							</div>
							<div className="rowContainer">
								<div className="icons">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none">
										<path
											d="M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z"
											stroke="#FAFAFA"
											stroke-width="1.5"
										/>
									</svg>
								</div>
								<div>My Reviews</div>
							</div>
							<div className="rowContainer">
								<div className="icons">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none">
										<path
											d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17"
											stroke="#FAFAFA"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<div>Logout</div>
							</div>
						</div>
					)}
				</div>
			</div>

			<div>
				{<MobileMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
			</div>
		</>
	);
};

export default Header;
