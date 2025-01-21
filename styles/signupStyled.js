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
}
.leftContainer{
  width:60%;
}
.rightContainer{
}
.head{
  font-size:36px;
}
`