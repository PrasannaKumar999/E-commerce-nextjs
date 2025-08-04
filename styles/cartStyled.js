import css from "styled-jsx/css";

export const cartStyles = css`
	.cartHeaderContainer {
		margin: 40px 0px;
		display: flex;
		justify-content: space-between;
		padding: 24px 40px;
		/* box-shadow: #000000 0px 1px 31px 5px; */
		box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.05);
		width: 100%;
		color: black;
	}
	.cartItemsContainer {
		display: flex;
		flex-direction: column;
		gap: 50px;
		color: black;
	}
	.productContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24px 40px;
		box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.05);
		color: #000;
	}
	.cartColumn {
		flex: 1;
	}
	.textCenterAlign {
		text-align: center;
	}
	.textStartAlign {
		text-align: start;
	}
	.textEndAlign {
		text-align: end;
	}
	.cartImageContainer {
		position: relative;
	}
	.iconRemove {
		position: absolute;
		top: -2px;
		left: -2px;
		color: white;
		background: red;
		padding: 2px 8px;
		border-radius: 50%;
		width: 15px;
		height: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 10px;
		cursor: pointer;
	}
	.quantityButton {
		padding: 2px 8px;
		border-radius: 50%;
		width: 30px;
		border: 1px solid rgb(225, 225, 225);
		cursor: pointer;
		color: #000;
	}
	.quantity {
		border: 1px solid rgb(225, 225, 225);
		padding: 4px 20px;
		margin: 0px 10px;
		color: #000;
	}
	.ctaButton {
		border: 1px solid rgb(0, 0, 0, 0.5);
		padding: 16px 48px;
		border-radius: 4px;
		margin-top: 30px;
		cursor: pointer;
		font-weight: 500;
		color: #000;
	}
	.ctaButtonActive {
		padding: 16px 48px;
		border-radius: 4px;
		cursor: pointer;
		background: #db4444;
		color: white;
		width: fit-content;
		margin: auto;
	}
	.cartBottomContainer {
		display: flex;
		justify-content: space-between;
		margin: 80px 0px;
		color: #000;
	}
	.ctaCouponInput {
		border: 1px solid rgb(0, 0, 0, 0.5);
		padding: 16px 72px 16px 24px;
		border-radius: 4px;
	}
	.couponContainer {
		display: flex;
		align-items: center;
		align-self: flex-start;
		gap: 16px;
	}
	.cartContainer {
		padding: 24px 32px;
		border: 1px solid black;
		width: 40%;
	}
	.rupeeSymbol {
		font-family: Arial, Helvetica, sans-serif;
	}
	.cartRow {
		display: flex;
		justify-content: space-between;
		padding: 16px 0px;
		border-bottom: 1px solid black;
	}
	.txtCartEmpty {
		font-size: 30px;
		font-weight: 500;
		color: #000;
	}
	.txtCartpickup {
		font-size: 16px;
		color: #61a7f4;
		cursor: pointer;
		color: #000;
	}
`;
