import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const Applayout = ({children}) => {
	return (
		<div style={{ height: '100vh', overflowY: 'auto',scrollbarWidth:"thin" }}>
			<Banner />
			<Header />
			<main style={{ maxWidth: '1170px', margin: '0px auto' }}>{children}</main>
			<Footer/>
		</div>
	);
};

export default Applayout;
