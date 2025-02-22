import React, { useEffect, useState } from "react";
import { productStyled } from "../../../styles/productStyled";
import { useParams } from "next/navigation";

export async function getServerSideProps(context) {
	let query = context.query.product;
	const res = await fetch(`https://fakestoreapi.in/api/products/${query}`);
	const data = await res.json();
	const productData = data.product;
	return {
		props: { productData },
	};
}

const product = ({ productData }) => {
	const colors = ["blue", "red"];
	const sizes = ["XS", "S", "M", "L", "XL"];
	const [selectedColour, setSelectedColour] = useState(colors[0]);
	const [selectedSize, setSelectedSize] = useState(null);
	return (
		<>
			<style jsx>{productStyled}</style>
			<div className="mainContainer">
				<div className="sideImageContainer">
					<div className="sideImage">
						<img className="image" src={`${productData.image}`} />
					</div>
					<div className="sideImage">
						<img className="image" src={`${productData.image}`} />
					</div>
					<div className="sideImage">
						<img className="image" src={`${productData.image}`} />
					</div>
					<div className="sideImage">
						<img className="image" src={`${productData.image}`} />
					</div>
				</div>
				<div className="mainImageContainer">
					<img className="image" src={`${productData.image}`} />
				</div>
				<div className="detailsContainer">
					<div className="headingProduct">Havic HV G-92 Gamepad</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							margin: "16px 0px",
						}}>
						<div style={{ marginRight: "10px" }}>
							{[1, 2, 3, 4, 5].map((ele) => (
								<svg
									key={ele}
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 16 15"
									fill="none">
									<path
										d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
										fill="#FFAD33"
									/>
								</svg>
							))}
						</div>
						<span className="txtReview">(150 Reviews)</span>
						<span style={{ margin: "0px 16px" }}> | </span>
						<span className="txtStock"> In Stock </span>
					</div>
					<div className="price poppins-regular">
						<span className="rupeeSymbol">₹</span>
						{productData?.price * 84}
					</div>
					<div className="title">{productData?.title}</div>
					<div className="borderBottom"></div>
					<div style={{ display: "flex", gap: "10px", alignItems: "end" }}>
						<div className="txtColors">Colors:</div>
						<div style={{ display: "flex", gap: "8px" }}>
							{colors.map((ele) => (
								<div
									className={`${
										selectedColour === ele ? "activeColour" : "inActiveColour"
									}`}
									key={ele}>
									<div
										className={`colorBox ${ele}`}
										onClick={() => {
											setSelectedColour(ele);
										}}></div>
								</div>
							))}
						</div>
					</div>
					<div
						style={{
							display: "flex",
							gap: "10px",
							alignItems: "center",
							marginTop: "24px",
						}}>
						<div className="txtColors">Size:</div>
						<div style={{ display: "flex", gap: "8px", fontSize: "14px" }}>
							{sizes.map((ele) => (
								<div
									key={ele}
									className={`sizes ${
										selectedSize === ele ? "selectedSize" : ""
									}`}
									onClick={() => setSelectedSize(ele)}>
									{ele}
								</div>
							))}
						</div>
					</div>
					<div className="quantityContainer">
						<div className="changeQuantityContainer">
							<div className="removeQuantity">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="2"
									viewBox="0 0 18 2"
									fill="none">
									<path
										d="M17 1H1"
										stroke="black"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
								</svg>
							</div>
							<div className="quantityNumber">2</div>
							<div className="addQuantity">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none">
									<path
										d="M9 17V9M9 9V1M9 9H17M9 9H1"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
								</svg>
							</div>
						</div>
						<div className="ctaBuyNow">Buy Now</div>
						<div className="icon">
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
					</div>
					<div className="deliveryMainContainer">
						<div className="deliveryContainer">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none">
									<g clip-path="url(#clip0_261_4843)">
										<path
											d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
											stroke="black"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
											stroke="black"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
											stroke="black"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
											stroke="black"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M5 11.8182H11.6667"
											stroke="black"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M1.81836 15.4545H8.48503"
											stroke="black"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M5 19.0909H11.6667"
											stroke="black"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_261_4843">
											<rect width="40" height="40" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>
							<div>
								<div className="textTop">Free Delivery</div>
								<div className="textBottom">
									Enter your postal code for Delivery Availability
								</div>
							</div>
						</div>
						<div className="deliveryBorderBottom"></div>
						<div className="deliveryContainer">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none">
									<g clip-path="url(#clip0_261_4865)">
										<path
											d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
											stroke="black"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
											stroke="black"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_261_4865">
											<rect width="40" height="40" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>
							<div>
								<div className="textTop">Return Delivery</div>
								<div className="textBottom">
									Free 30 Days Delivery Returns. Details
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default product;
