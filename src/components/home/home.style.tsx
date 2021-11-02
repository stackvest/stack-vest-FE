import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100vh;
    margin: 0 20px;   
`
export const HomeWrap = styled.div`
 max-width: var(--max-container);
 margin: var(--center-container)`

export const HomeHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0;
    
`

export  const HomeLogo =  styled.img``
export  const AccountIcon =  styled.img``

export const TabHeaders = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    @media (max-width:var(--tablet)){
        flex-direction:column ;
        padding: 0 20px;
        
    }
`

export const TabText = styled.p`
    padding: 20px 50px ;
    border-bottom: 1px solid grey;
    position: relative;
    text-transform: uppercase;
    font-weight: var(--font-weight-200) ;
    &::after{
        content: '';
        height: 3px;
        width: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        margin-top: 17px; 
        opacity: 0;
        background-color: var(--color-pry-100);
    }
    &:hover{
        &::after{
            opacity: 1;
        }
    }
    @media (max-width: var(--tablet)){
        width: 100%;
        text-align: center;
    }   
`
export const NavWrap = styled.div`
display: flex;
align-items: center;
gap: 30px;

&>button{
        border: none;
        width: 152px;
        height: 56px;
        text-align: center;
        border-radius: 8px;
        text-transform: uppercase;
        font-size: 0.9375rem;
        font-weight: var(--font-weight-200);
        letter-spacing: 1px;
        transition: all 250ms ease-in-out;
        color: var(--color-pry-100);
        background: var(--color-pry-300);
        &:hover {
          color: var(--color-pry-300);
          background: var(--color-pry-100);
        }
}
`
    

