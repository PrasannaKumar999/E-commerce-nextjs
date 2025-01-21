import Banner from "@/components/banner";
import Bottombar from "@/components/bottombar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useEffect, useState } from "react";

const Applayout = ({ children }) => {
	const [showBottomBar, setShowBottomBar] = useState(false);


	useEffect(() => {
		// Function to check screen width and update state
		const handleResize = () => {
			setShowBottomBar(window.innerWidth <= 600);
		};

		// Initial check
		handleResize();

		// Add resize event listener
		window.addEventListener("resize", handleResize);

		// Cleanup on unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div
			style={{ height: "100vh", overflowY: "auto", scrollbarWidth: "thin" }}
			data-scroll-container>
			<Banner />
			<Header />
			<main style={{ maxWidth: "1170px", margin: "0px auto" }}>{children}</main>
			<Footer />
			<div>{showBottomBar && <Bottombar />}</div>
		</div>
	);
};

export default Applayout;
