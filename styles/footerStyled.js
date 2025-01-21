import css from "styled-jsx/css";

export const footerStyles = css`
	.footerMainContainer {
		background: #000000;
	}

	.footerContainer {
		max-width: 1170px;
		margin: auto;
		padding: 40px 0px 20px 0px;
		border-bottom: 1px solid rgb(225, 225, 225);
		color: white;
	}
	.textExclusive {
		font-size: 24px;
		color: white;
		font-weight: 600;
	}
	.footerHeading {
		font-size: 20px;
		color: white;
    padding-bottom:8px;
	}
	.footer {
		display: flex;
		justify-content: space-between;
    padding-bottom:50px;
	}
	.footerRow {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.footer input[type="email"] {
		width: 80%;
		padding: 8px;
		margin: 10px 0;
		border: 1px solid #fff;
		background: none;
		color: #fff;
	}
  .textSave{
    opacity:0.5;
  }
  .footerbottom{
    text-align:center;
    color:#FFFFFF;
    opacity:0.5;
    border-top:1px solid #ffffff
  }

	@media (max-width:1170px){
		.footerContainer{
			overflow:hidden;
		}
	}
`;
