import { useCart } from "@/context/cartContext";
import { productCardStyled } from "@/styles/productCardStyled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
	const { cart, dispatch } = useCart();
	const router = useRouter();
	return (
		<>
			<style jsx>{productCardStyled}</style>
			<div
				className="productMainContainer"
				onClick={() => {
					router.push(`/home/products/${product?.id}`);
				}}>
				<div className="productContainer">
					<div
						className="ctaBottom"
						onClick={(e) => {
							e.stopPropagation();
							dispatch({ type: "ADD_TO_CART", payload: product });
						}}>
						Add to Cart
					</div>
					<div className="imageContainer">
						<img src={`${product?.image}`} />
					</div>
					<div className="discount">{`${
						product?.discount ? -product.discount : "-10"
					}%`}</div>
					<div className="rightProductIcons">
						<div className="heartIcon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="34"
								height="34"
								viewBox="0 0 34 34"
								fill="none">
								<circle cx="17" cy="17" r="17" fill="white" />
								<path
									d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className="eyeIcon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="34"
								height="34"
								viewBox="0 0 34 34"
								fill="none">
								<circle cx="17" cy="17" r="17" fill="white" />
								<path
									d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>

				<div className="productDescriptionContainer">
					{/* <div className="productDetail">{`${
						product?.brand ? product?.brand : ""
					} ${product?.model ? product?.model : ""}`}</div> */}
					<div className="productDetail">{`${product?.title ? product?.title : ""}`}</div>
					<div className="productOffer">
						<span className="offerPrice">
							<span className="rupeeSymbol">₹</span>
							{`${product?.price * 84}`}
						</span>{" "}
						<strike className="actualPrice">₹160</strike>
					</div>
					<div className="productRating">
						<div style={{ display: "flex", gap: "4px" }}>
							{[1, 2, 3, 4, 5].map((ele) => (
								<svg
									key={ele}
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="15"
									viewBox="0 0 16 15"
									fill="none">
									<path
										d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
										fill="#FFAD33"
									/>
								</svg>
							))}
						</div>
						<div className="ratingCount">(88)</div>
					</div>
					<div className="addtoCartMobile" onClick={(e) => {
							e.stopPropagation();
							dispatch({ type: "ADD_TO_CART", payload: product });
						}}>
						Add to cart
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
