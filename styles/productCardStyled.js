import css from 'styled-jsx/css'

export const productCardStyled = css`
.productMainContainer{

}
.productContainer{
  width:270px;
  height:250px;
  background:#F5F5F5;
  border-radius:4px;
  position:relative;
  cursor:pointer;
}
.imageContainer{
  width:100%;
  height:100%;
  object-fit:contain;
  position:absolute;
  left:0px;
  right:0px;
  bottom:0px;
}
.imageContainer > img {
  width:100%;
  height:100%;
  border-radius:4px;
}
.discount{
  position:absolute;
  left:12px;
  top:12px;
  background:#DB4444;
  padding:4px 12px;
  font-size:12px;
  color:#FAFAFA;
  line-height:18px;
  border-radius:4px;
}
.rightProductIcons{
  position:absolute;
  right:12px;
  top:12px
}
.ctaBottom{
  visibility:hidden;
  position: absolute;
  bottom: -10px;
  width: 100%;
  text-align: center;
  transition: bottom 0.3s ease;

}
.productContainer:hover > .ctaBottom{
  visibility: visible;
  position:absolute;
  bottom:0px;
  left:0px;
  right:0px;
  background:black;
  color:white;
  text-align:center;
  padding:8px 0px;
  z-index:2;
}
.productDescriptionContainer{
  width:270px;
  display:flex;
  flex-direction:column;
  gap:5px;
  margin-top:10px;
}
.productOffer{

}
.offerPrice{
  color:#DB4444;
}
.actualPrice{
  margin-left:12px;
  text-decoration:stroke;
  color:#000000;
}
.productDetail{
  text-transform: capitalize;
  font-size:16px;
  color:black;
  font-weight:500;
}
.rupeeSymbol{
  font-family: Arial, Helvetica, sans-serif
}
.productRating{
  display:flex;
  gap:8px;
}
.ratingCount{
  font-size:14px;
}






.addtocart {
  position: absolute;
  bottom: -50px; /* Start hidden below the container */
  width: 100%;
  text-align: center;
  transition: bottom 0.3s ease; /* Smooth animation */
}

/* Hover effect */
.product:hover .addtocart {
  bottom: 20px;
}

/* Addtocart button styling */
.addtocart button {
  background-color: #007bff; /* Button color */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease; /* Smooth hover effect */
}








/* Container for the product */
.product {
  position: relative;
  width: 300px; /* Set your desired width */
  height: 400px; /* Set your desired height */
  overflow: hidden;
  border: 1px solid #ddd; /* Optional styling */
  border-radius: 8px; /* Optional styling */
  transition: box-shadow 0.3s ease; /* Optional effect */
}

.product:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Optional effect */
}

/* Product image styling */
.productimage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Addtocart button container */
.addtocart {
  position: absolute;
  bottom: -50px; /* Start hidden below the container */
  width: 100%;
  text-align: center;
  transition: bottom 0.3s ease; /* Smooth animation */
}

/* Hover effect */
.product:hover .addtocart {
  bottom: 20px;
}

/* Addtocart button styling */
.addtocart button {
  background-color: #007bff; /* Button color */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease; /* Smooth hover effect */
}

.addtocart button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}




















`