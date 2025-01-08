import css from "styled-jsx/css";
export const homeStyled = css`
	.categoryContainer {
		display: flex;
		width: 100%;
		align-items: end;
	}
	.category {
		color: black;
		font-weight: 400;
		cursor: pointer;
	}
	.divider {
		width: 100vw;
		border-bottom: 1px solid rgb(225, 225, 225);
		position: absolute;
		left: 0px;
		right: 0px;
	}
	.leftSection {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 20%;
		border-right: 1px solid rgb(225, 225, 225);
		padding-top: 45px;
	}
	.rightSection {
		flex: 1;
		height: 100%;
    align-self:end;
    padding:45px 0px 0px 45px;
	}
	.imageContainer {
		object-fit: contain;
		background: black;
		width: 100%;
		height: 350px;
	}
	.imageContainer > img {
		width: 100%;
		height: 350px;
	}
  .dealsToday{
    display:flex;
    align-items:center;
    gap:20px;
    width:100%;
    margin-top:10%;
    color:#DB4444;
    font-size:16px;
    font-weight:500;
  }
  .categories{
    display:flex;
    align-items:center;
    gap:20px;
    width:100%;
    margin-top:80px;
    color:#DB4444;
    font-size:16px;
    font-weight:500;
  }
  .rectangle{
    width:20px;
    height:40px;
    border-radius:5px;
    background:#DB4444;
  }
  .countdown{
    display:flex;
    align-items:end;
    gap:87px;
    margin-top:15px;
  }
  .countdownContainer{
    display:flex;
    gap:20px;
  }
  .textFlashSales{
    font-size:36px;
    color:black;
    font-weight:500;
  }
  .timeContainer{
    display:flex;
    align-items:center;
    gap:20px;
  }
  .timeTitle{
    font-size:12px;
    color:black;
    font-weight:500;
  }
  .timeSubTitle{
    font-size:32px;
    color:black;
    font-weight:bold;
  }
  .colonContainer{
    display:flex;
    flex-direction:column;
    gap:6px;
    margin-top:10px;
  }
  .colon{
    width:5px;
    height:5px;
    border-radius:50%;
    background:#DB4444;
  }
  .buttonContainer{
    display:flex;
    gap:10px;
    margin-left:auto;
  }
  .slideButton{
    padding: 10px;
    background:#F5F5F5;
    border-radius: 50%;
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
  }
  .ctaAllProducts{
    padding:16px 48px;
    background:#DB4444;
    color:white;
    margin:auto;
    border-radius:4px;
    cursor:pointer;
  }
`;
