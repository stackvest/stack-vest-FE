import styled from "styled-components";

export const OnboardContainer = styled.div`
display: grid;
place-items: center;
place-content: center;
height: 100vh;
`
export const LogoImage = styled.img`
animation: rotate 2s linear infinite;
`

export const OnboardHeader = styled.h1`
    text-transform: uppercase;
font-size:64px;

`

export const ConnectWallet = styled.button`
border: 3px solid transparent;
background-color: var(--color-pry-100);
color: var(--color-pry-200) ;
padding: 15px;
border-radius: 5px;
font-size: 2rem;
font-weight:var(--font-weight-200);
transition: var(--transition);

&:hover{
background-color: var(--color-pry-200) ;
border: 3px solid var(--color-pry-100);
color: var(--color-pry-100) ;
}

`
