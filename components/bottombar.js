import React from "react";
import { bottomBarStyles } from "@/styles/bottomBarStyled";
import { useRouter } from "next/router";

const Bottombar = () => {
  const router = useRouter()
	return (
		<>
			<style jsx>{bottomBarStyles}</style>
			<div className="bottombarContainer">
				<div className="imageContainer" onClick={() => router.push('./home')}>
					<img src="https://cdn-icons-png.flaticon.com/128/263/263115.png" />
				</div>
				<div className="imageContainer"  onClick={() => router.push('./categories')}>
					<img src="https://cdn-icons-png.flaticon.com/128/18523/18523965.png" />
				</div>
				<div className="imageContainer">
					<img src="https://cdn-icons-png.flaticon.com/128/18557/18557239.png" />
				</div>
			</div>
		</>
	);
};

export default Bottombar;
