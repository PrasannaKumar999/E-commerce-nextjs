import css from 'styled-jsx/css'

export const signUpStyles = css`
.signupMainContainer{
  display:flex;
  width: 100vw; /* Occupies full viewport width */
  margin-left: calc(-50vw + 50%); /* Adjust to align with viewport */
  background:red;

  display:flex;
  align-items:center;
  justify-content:center;
}
.signupContainer{
  max-width:1170px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:60px 0px 140px 0px;
}
.leftContainer{
  width:60%;
}
.rightContainer{
}
.head{
  font-size:36px;
  margin-bottom: 24px;
}
.inputSection{
  padding-top:48px;
  display:flex;
  flex-direction:column;
  gap:40px;
}

.inputs > input {
    all: unset;
    border-bottom: 1px solid black;
    padding: 0px 0px 8px 0px;
    width:100%
}
.bottomText{
  display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 32px;
    gap: 16px;
}
.textLogin{
  font-weight:500;
  cursor:pointer;
}
.textForgetPass{
  font-size:16px;
  color:#DB4444;
  cursor:pointer;
}
`
