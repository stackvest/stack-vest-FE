import Onboard from "./components/onboarding/Onboard"
import  { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./Global/global"


function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Onboard />
    </div>
  )
}

export default App
