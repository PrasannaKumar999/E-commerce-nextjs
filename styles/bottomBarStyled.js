import css from "styled-jsx/css";

export const bottomBarStyles = css`
	.bottombarContainer {
		position: fixed;
		bottom: 0px;
		left: 0px;
		right: 0px;
		background: white;
		z-index: 9999;

		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
	}
  .imageContainer{
    width:25px;
    height:25px;
  }
  .imageContainer > img{
    width:100%;
    height:100%;
  }
`;
