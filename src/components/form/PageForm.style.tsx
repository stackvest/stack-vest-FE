import styled, { css } from "styled-components"


        export const Form = styled.form`
        display: flex;
        flex-direction: column;
        gap: 25px;
        input{
          border: none;
          width: 100%;
          background: transparent;
          border: 1px solid var(--color-neu-100);
          color: var(--color-pry-100);
          font-size: 15px;
          padding: 15px;
          border-radius: 5px;
          &:focus,
          &::selection {
            border: 1px solid var(--color-pry-100);
            outline: none;
          }
          &::placeholder {
            color: var(--color-neu-100);
            font-weight: var(--font-weight-200);
          }
          @media (max-width:var(--tablet)) {
            flex-direction: column;
            width: 100%;
          }
          
        }
      `
      export const FormInput = styled.div``
      
      export const FormButton = styled.button`
        align-self: center;
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
      `
      
      export const HiddenLabel = styled.label`
        border: 0 !important;
        clip: rect(1px, 1px, 1px, 1px) !important;
        -webkit-clip-path: inset(50%) !important;
        clip-path: inset(50%) !important;
        height: 1px !important;
        margin: -1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        width: 1px !important;
        white-space: nowrap !important;
      `

    export const FormSelect  = styled.select`
    border: 1px solid var(--color-pry-100);
    border-radius: 5px;
    font-size: 14px;
    padding: 15px;
    `
    export const SelectOption = styled.option``
    export const PageLabel = styled.label`
    text-transform: uppercase;
    `




