import css from "styled-jsx/css";
export const headerStyled = css`
	.headerContainer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1170px;
		margin: auto;
    padding:40px 0px 20px 0px;
    border-bottom: 1px solid rgb(225, 225, 225);

    position:sticky;
    top:0px;
    background:white;
    z-index:9999;

	}
  .textExclusive{
    font-size : 24px;
    font-weight:600;
    cursor:pointer;
  }
  .optionsDiv{
    display:flex;
    gap:50px;
  }
  .option{
    cursor:pointer;
  }
  .optionHover{
    cursor:pointer;
    border-bottom:1px solid black;
  }
  .rightDiv{
    display:flex;
    gap:30px;
    align-items:center
  }
  .inputContainer{
    background:#F5F5F5;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:34px;
    /* height:38px; */
    padding:7px 12px 7px 20px;
    /* padding:20px 20px 20px 30px; */
    border-radius:10px;
    font-size:12px;
  }
  .cartNumber{
    position: absolute;
    top: -4px;
    right: -2px;
    background: #DB4444;
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
`;
