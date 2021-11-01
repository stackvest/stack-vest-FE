import styled from "styled-components";

export const ButtonContainer = styled.button`
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