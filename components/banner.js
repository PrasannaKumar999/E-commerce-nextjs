import React from "react";
import styles from "@/styles/Home.module.css";
const Banner = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.container}>
				<span className={styles.middleText}>
					<span>
						Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
					</span>
					<span className={styles.textShopNow}>Shop Now!</span>
				</span>
				<span className={styles.endText}>
					<span>English</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none">
						<path
							d="M12.3645 12.95L17.3145 8L18.7285 9.414L12.3645 15.778L6.00051 9.414L7.41451 8L12.3645 12.95Z"
							fill="white"
						/>
					</svg>
				</span>
			</div>
		</div>
	);
};

export default Banner;
