import css from 'styled-jsx/css'


export const mobileMenuStyles = css`
.mobileMenuContainer{
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0px;
  left: 0;
  background-color: white;
  color:#111;
  overflow-x: hidden;
  transition: 0.3s;
  text-align:center;
}
.mobileContainer{
  height: 100%;
  width: 0px;
  position: fixed;
  z-index: 9999;
  top: 0px;
  left: 0;
  background-color: white;
  color:#111;
  overflow-x: hidden;
  text-align:center;
}
.menuHeader{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 20px;
  border-bottom:1px solid rgb(225, 225, 225);
}
.txtExclusive{
  font-size: 24px;
  font-weight: 600;
}
.categoryOptionContainer{
  text-align:left;
  padding:0px 20px;
}
.categoryOption{
  font-size:18px;
  padding:15px 0px;
  border-bottom:1px solid rgb(225, 225, 225);
}
`