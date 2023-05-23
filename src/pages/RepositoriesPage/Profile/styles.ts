import styled from "styled-components";
export const Container = styled.div `
display: flex;
flex-direction: column;
padding: 1rem;
`

export const Header = styled.div `
display: flex;
flex-direction: column;


@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
flex-direction: row;
align-items: center;
}
`
export const Avatar = styled.img `
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;
  box-shadow:
    0 0 6px red,
    0 0 6px green,
    0 0 6px blue;

  animation: mudarCor 3s infinite;

  @keyframes mudarCor {
    0% {
      box-shadow:
        0 0 6px red,
        0 0 6px green,
        0 0 6px blue;
    }
    33.33% {
      box-shadow:
        0 0 6px green,
        0 0 6px blue,
        0 0 6px red;
    }
    66.66% {
      box-shadow:
        0 0 6px blue,
        0 0 6px red,
        0 0 6px green;
    }
    100% {
      box-shadow:
        0 0 6px red,
        0 0 6px green,
        0 0 6px blue;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }

`

export const Login = styled.h1 `
font-size: ${(props) => props.theme.fontSize.base};
color: ${(props) => props.theme.colors.white};

`
export const Name = styled.h2 `
font-size: ${(props) => props.theme.fontSize.xl};
font-family: ${(props) => props.theme.fontFamily.mono};
padding: 0;
margin: 0;

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
 display:none;
}
`
export const Inner = styled.div `
padding: 1rem;

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
 display:none;
}
`
export const Data = styled.p `
display:flex;
align-items: center;
line-height: 1.5;

a {
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
}

svg {
  margin-right: 10px;
}
`
