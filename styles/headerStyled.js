import css from "styled-jsx/css";
export const headerStyled = css`
	.headerContainer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1170px;
		margin: auto;
		padding: 40px 0px 20px 0px;
		border-bottom: 1px solid rgb(225, 225, 225);

		position: sticky;
		top: 0px;
		background: white;
		z-index: 9999;
		color:black;
	}
	.textExclusive {
		font-size: 24px;
		font-weight: 600;
	}
	.optionsDiv {
		display: flex;
		gap: 50px;
	}
	.option {
		cursor: pointer;
	}
	.optionHover {
		cursor: pointer;
		border-bottom: 1px solid black;
	}
	.rightDiv {
		display: flex;
		gap: 30px;
		align-items: center;
		position: relative;
	}
	.inputContainer {
		background: #f5f5f5;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 34px;
		/* height:38px; */
		padding: 7px 12px 7px 20px;
		/* padding:20px 20px 20px 30px; */
		border-radius: 10px;
		font-size: 12px;
	}
	.cartNumber {
		position: absolute;
		top: -4px;
		right: -2px;
		background: #db4444;
		padding: 4px 8px;
		border-radius: 50%;
		width: 16px;
		height: 16px;
		font-size: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 12px;
	}
	.usercontainer {
		position: absolute;
		top: Calc(100%);
		right: 0px;
		border-radius:4px;
		background: linear-gradient(90deg, rgba(156,109,162,1) 0%, rgba(75,62,77,1) 100%);
		padding: 18px 12px 10px 20px;

		display: flex;
		flex-direction: column;
		gap: 13px;
		color:white;
	}
	.icons{
		width:32px;
		height:32px;
	}
	.icons > svg {
		width:100%;
		height:100%;
	}
	.rowContainer {
		display: flex;
		gap: 20px;
		cursor:pointer;
		align-items:center;
		font-size:14px;
	}
	.user{
		display:flex;
		align-items:center;
		gap:8px;
		cursor:pointer;
	}

	@media (max-width: 600px) {
		.optionsDiv {
			display: none;
		}
		.inputContainer {
			display: none;
		}
		.wishList {
			display: none;
		}
		.headerContainer {
			padding: 4px 10px;
		}
		.mobileMenu {
			display: block;
		}
	}
	@media (min-width: 600px) {
		.mobileMenu {
			display: none;
		}
		.wishList {
			cursor: pointer;
		}
	}
`;
