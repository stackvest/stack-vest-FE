import Onboard from "./components/onboarding/Onboard"
import  { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./Global/global"
import Home from "./components/home/Home" 
import { displayName, userSession } from "./auth";


import {useEffect, useState} from 'react'


function App() {

  const [userData, setUserData] = useState({})
 
  useEffect( () => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData: any) => {
        window.history.replaceState({}, document.title, "/");
        setUserData({ userData: userData });
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData({ userData: userSession.loadUserData() });
    }
  },[]  )

  return (
    <div className='App'>
      <GlobalStyles />
      {!userSession.isUserSignedIn() && 
          <Onboard />
      }
      
      
      {userSession.isUserSignedIn() && (
          <Home/> 
        )}
      
    </div>
  )
}

export default App
