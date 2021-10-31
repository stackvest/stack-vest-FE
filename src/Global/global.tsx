import styled, { createGlobalStyle, css } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    ///////////////////////////////////////////////////////
    // TODO: ROOT VALUES
    :root {
        // COLORS
        --color-pry-100: hsl(235, 24%, 19%);
        --color-pry-200: hsl(0, 0%, 100%);
        --color-pry-300: hsl(0, 0%, 95%);
        // FONTS
        --font-pry-100: 'Jost', sans-serif;
        
        --font-weight-100: 400; 
        --font-weight-200: 500; 
        --font-weight-400: 700; 
        // WIDTH
        --max-container: 69.375rem;
        --center-container: 0 auto;
        //BORDER
        --border-radius: 0.5rem;
        //ANIMATION 
        --transition: all 0.5s;
    }

    body{
        font-family: var(--font-pry-100);
        color: var(--color-pry-100);
    }

    @keyframes rotate {
  100% {transform: rotate(360deg) }
}
`
