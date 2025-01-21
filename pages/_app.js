import { CartProvider } from "@/context/cartContext";
import Applayout from "@/layouts/applayout";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = () => {
      const scrollableDiv = document.querySelector('[data-scroll-container]');
      if (scrollableDiv) {
        scrollableDiv.scrollTo(0, 0);
      }
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<CartProvider>
			<Applayout>
				<Component {...pageProps} />
			</Applayout>
		</CartProvider>
	);
}
