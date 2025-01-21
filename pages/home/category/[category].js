import ProductCard from "@/components/productCard";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Category = () => {
	const router = useRouter();
	const { category } = router.query;

	const [categoryItems, setCategoryItems] = useState(null);

	useEffect(() => {
		if (category) {
			fetch(`https://fakestoreapi.in/api/products/category?type=${category}`)
				.then((res) => res.json())
				.then((ele) => {
					setCategoryItems(ele.products);
				});
		}
	}, [category]);

	return (
		<>
			{categoryItems ? (
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "30px",
						justifyContent: "center",
					}}>
					{categoryItems?.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
				</div>
			) : (
				<div>Loading</div>
			)}
		</>
	);
};

export default Category;
