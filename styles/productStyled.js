import css from "styled-jsx/css";

export const productStyled = css`
	.mainContainer {
		/* max-height: 600px; */
		display: flex;
		margin: 100px 0px;
		/* min-height:Calc(100vh - 148px); */
		justify-content:center,
	}
	.sideImage {
		background: #f5f5f5;
		width: 170px;
		height: 138px;
		/* margin-top: 16px; */
		display: flex;
		flex-direction: column;
		col: 16px;
	}
	.sideImageContainer {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.mainImageContainer {
		height: 600px;
		/* width:80%; */
	}
  .detailsContainer{
    width: 40%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
	.image {
		width: 100%;
		height: 100%;
	}
	.headingProduct {
		font-size: 24px;
		font-weight: 500;
	}
	.txtReview {
		font-size: 14px;
		color: 000000;
	}
	.txtStock {
		color: #00ff66;
	}
	.price {
		font-size: 24px;
		margin-bottom: 24px;
	}
	.title {
		overflow:hidden;
		/* padding-bottom:24px; */
	}
	.borderBottom {
		width: 100%;
		border-bottom: 1px solid black;
		opacity: 0.5;
		margin: 24px 0px;
	}
	.txtColors {
		font-size: 24px;
		margin-right: 24px;
	}
	.colorBox {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		cursor: pointer;
	}
	.blue {
		background: #a0bce0;
	}
	.red {
		background: #e07575;
	}
	.activeColour {
		padding: 2px;
		border: 2px solid black;
		border-radius: 50%;
	}
	.inActiveColour {
		border: 1px solid transparent;
	}
	.sizes {
		min-width: 32px;
		border: 1px solid black;
		padding: 4px 6px;
		border-radius: 4px;
		text-align: center;
		cursor: pointer;
	}
	.selectedSize {
		background: #db4444;
		color: white;
		border: none;
	}
	.quantityContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
    margin-top:24px;
	}
	.changeQuantityContainer {
		display: flex;
		border-radius: 4px;
	}
  .removeQuantity{
    padding: 10px 8px;
    border-right: 1px solid black;
    box-sizing: content-box;
    text-align: center;
    cursor:pointer;

    display:flex;
    align-items:center;
		border: 1px solid black;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .addQuantity{
    padding: 10px;
    box-sizing: content-box;
    text-align: center;
    background:#DB4444;
    color:white;
    cursor:pointer;

    display:flex;
    align-items:center;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .quantityNumber{
    padding: 7px 34px;
    font-size: 20px;
    border: 1px solid black;
    border-left: none;
    border-right: none;
  }
  .ctaBuyNow{
    background:#DB4444;
    padding:10px 48px;
    color:white;
    border-radius:4px;
		cursor:pointer;
  }
  .icon{
    border: 1px solid black;
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius:4px;
    cursor:pointer;
  }
  .deliveryMainContainer{
    border: 1px solid black;
    margin-top:24px;
    border-radius:4px;
  }
  .deliveryContainer{
    display:flex;
    align-items:center;
    gap:16px;
    padding: 16px 24px;
  }
  .textTop{
    font-size:16px;
    font-weight:500;
  }
  .textBottom{
    font-size:12px;
    font-weight:500;
    cursor:pointer;
  }
  .deliveryBorderBottom{
    width: 100%;
    border-bottom: 1px solid black;
    opacity: .5;
  }

	@media (max-width:600px){
		.sideImageContainer{
			display:none;
		}
		.mainContainer{
			flex-direction:column;
			margin:0px;
		}
		.detailsContainer{
			width:100%;
			padding:0px 10px 30px;
		}
		.mainImageContainer {
		height: 300px;
		width:80%;
		margin:auto;
	}
	}
`;
