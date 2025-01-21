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
		align-self: end;
		padding: 45px 0px 0px 45px;
	}
	.imageContainer {
		object-fit: contain;
		width: Calc(1170px - 234px);
		height: 350px;
	}
	.imageContainer > img {
		width: 100%;
		height:100%;
		/* height: 350px; */
	}
	.dealsToday {
		display: flex;
		align-items: center;
		gap: 20px;
		width: 100%;
		margin-top: 10%;
		color: #db4444;
		font-size: 16px;
		font-weight: 500;
	}
	.categoryLeftContainer{
		width:50%;
	}
	.categories {
		display: flex;
		align-items: center;
		gap: 20px;
		width: 100%;
		margin-top: 80px;
		color: #db4444;
		font-size: 16px;
		font-weight: 500;
	}
	.rectangle {
		width: 20px;
		height: 40px;
		border-radius: 5px;
		background: #db4444;
	}
	.countdown {
		display: flex;
		align-items: end;
		gap: 87px;
		margin-top: 15px;
	}
	.categoryBoxContainer{
		display: flex;
		justifyContent: space-between;
		gap: 30px;
		padding: 60px 0px 10px 0px;
		width:100%;
		overflow:scroll;
		scrollbar-width:none;
	}
	.countdownContainer {
		display: flex;
		gap: 20px;
	}
	.textFlashSales {
		font-size: 36px;
		color: black;
		font-weight: 500;
	}
	.timeContainer {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.timeTitle {
		font-size: 12px;
		color: black;
		font-weight: 500;
	}
	.timeSubTitle {
		font-size: 32px;
		color: black;
		font-weight: bold;
	}
	.colonContainer {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-top: 10px;
	}
	.colon {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #db4444;
	}
	.buttonContainer {
		display: flex;
		gap: 10px;
		margin-left: auto;
	}
	.slideButton {
		padding: 10px;
		background: #f5f5f5;
		border-radius: 50%;
		width: 46px;
		height: 46px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.ctaAllProducts {
		padding: 16px 48px;
		background: #db4444;
		color: white;
		margin: auto;
		border-radius: 4px;
		cursor: pointer;
	}
	.productsDataContainer{
		display: flex;
		margin: 30px 0px;
		overflow: auto;
		scrollbar-width: none;
		gap:30px;
	}
	.ctaAllProductsContainer{
		display: flex;
		border-radius: 4px;
		margin-top: 60px;
	}

	.categoryBox {
		border: 1px solid black;
		width: 175px;
		padding: 20px 40px;
		text-align: center;
		text-transform: capitalize;
		display: flex;
		gap: 16px;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		border-radius: 5px;
		color:black;
	}
	.categoryBox:hover {
		background: #db4444;
		color: white;
		border: 1px solid transparent;
	}
	.categoryBox:hover > svg {
		fill: #db4444;
		stroke: white;
	}
	.catergoryBoxImageContainer {
		width: 100%;
		border-radius: 4px;
		background: black;
		margin-top: 70px;
		position:relative;
		padding: 69px 56px;

		display: flex;
    justify-content: space-between;
    align-items: center;
	}
	.txtTop{
		color:#00FF66;
	}
	.textMiddle{
		color:white;
		font-size:48px;
		font-weight:500;
		margin:32px 0px;
	}
	.roundClock{
		background:#FFFFFF;
		border-radius:50%;
		width:62px;
		height:62px;
		color:black;

		display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
	}
	.imageCountDownTitle{
		font-size:16px;
		font-weight:600;
	}
	.imageCountDownSubtitle{
		font-size:11px;
	}
	.ctaImageBuyNow{
		background:#00FF66;
		padding:16px 48px;
		border-radius:4px;
		color:white;
		width:max-content;
		margin-top:40px;

		cursor:pointer;
	}
	.featuredBoxes{
		display:flex;
		gap:30px;
		height:600px;
		margin-top:60px;
	}
	.boxLeft{
		width:50%;
		background:black;
		border-radius:4px;
		position:relative;
		padding:0px 30px;
		cursor:pointer;
		overflow:hidden;
	}
	.boxLeft > img{
		position:absolute;
		bottom:0px;

		width:100%;
		height:90%;
	}
	.boxRight{
		width:50%;
		display:flex;
		flex-direction:column;
		gap:30px;
	}
	.rightImageTop{
		background:black;
		height:50%;
		border-radius:4px;
		cursor:pointer;
	}
	.rightImageBottomContainer{
    display: flex;
    gap: 30px;
    width: 100%;
    height: 50%;
	}
	.bottomrightImage{
		width: 50%;
    background: black;
		border-radius:4px;
		position:relative;
		padding:24px;
		cursor:pointer;

		display:flex;
		align-items:center;
		justify-content:center;
	}
	.bottomrightImage > img{
		/* position:absolute;
		bottom:10px; */
		width:100%;
		height:80%;
	}
	.imageText{
		position:absolute;
		bottom:24px;
		color:white;
		width:50%;

		display:flex;
		flex-direction:column;
		gap:16px;
	}
	.rightImageText{
		position:absolute;
		bottom:24px;
		left:24px;
		color:white;
		display:flex;
		flex-direction:column;
		gap:8px;
	}
	.textTopImage{
		font-size:24px;
		font-weight:500
		color:#FAFAFA;
	}
	.textMiddleImage{
		font-size:14px;
		font-weight:200;
		color:#FAFAFA;
	}
	.textBottomImage{
		font-size:16px;
		color:#FAFAFA;
		border-bottom:1px solid white;
		width:fit-content;
		padding-bottom:1px;
	}
	.customerContainer{
		display:flex;
		align-items:center;
		justify-content:space-between;
		gap:88px;
		padding:140px 113px;
	}
	.descriptionContainer{
		text-align:center;
		display:flex;
		gap:24px;
		flex-direction:column;
		align-items:center;
		justify-content:center;
		color:black;
	}
	.outerRound{
		background: rgba(47,48,46,0.3);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
	}
	.innerRound{
		background:black;
		border-radius:50%;
		width:50px;
		height:50px;

		display: flex;
    align-items: center;
    justify-content: center;
		padding:4px;
	}
	.customerTitle{
		font-size:20px;
		font-weight:600;
	}
	.CustomerSubtitle{
		font-size:14px;
		margin-top:8px;
	}
@media (max-width: 600px){
.leftSection{
	display:none;
}
.rightSection{
	padding:0px;
}
.imageContainer{
	width:100vw;
	height:300px;
}
.buttonContainer{
	display:none;
}
.productsDataContainer{
	padding:0px 10px;
	gap:20px;
}
.ctaAllProductsContainer{
	margin-top:0px;
}
.categoryBoxContainer{
	padding:30px 10px 10px ;
}
.countdown{
	flex-direction:column;
	gap:10px;
	align-items:center;
}
.dealsToday  {
	padding:0px 10px;
}
.categories{
	padding:0px 10px;
}
.categoryLeftContainer{
	z-index:2;
	width:100%;
}
.imageRightContainer{
	position:absolute;
	left:0px;
	right:0px;
	z-index:1;
}
.textFlashSales{
	font-size:20px;
}
.timeSubTitle{
	font-size:22px;
}
.textMiddle{
	font-size:20px;
}
.featuredBoxes{
	gap: 15px;
	flex-direction: column;
	padding: 0px 10px;
	margin-top: 30px;
}
.boxLeft{
	width:100%;
	height:100%;
}
.boxRight{
	width:100%;
	height:100%;
	gap:15px;
}
.rightImageBottomContainer{
	gap:15px;
}
.customerContainer{
	padding: 80px 0px;
	gap: 0px;
	overflow: scroll;
	justify-content: flex-start;
}
.outerRound{
	width:60px;
	height:60px;
}
.innerRound{
	width:40px;
	height:40px;
}
.customerTitle{
	width:300px;
	font-size:14px;
}
.customerSubTitle{
	font-size:12px;
}
.footer{
	display:block;
}
}
`;
