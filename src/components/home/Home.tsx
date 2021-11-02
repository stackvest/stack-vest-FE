import {
  AccountIcon,
  HomeContainer,
  HomeHeader,
  HomeLogo,
  HomeWrap,NavWrap,TabHeaders, TabText
} from "./home.style"
import logo from "../../assets/logo.svg"
import accountIcon from "../../assets/account-icon.svg"
import PageData from "../../data/PageData"
import PageForm from "../form/PageForm"
import { useState } from "react"
import { Button } from '@stacks/ui';
import { userSession,displayName } from '../../auth';


function Home() {

    const [index, setIndex] = useState(0)
    const handleToggle = (index:any) => {
        setIndex(index)
    }
    function signOut() {
        userSession.signUserOut(window.location.origin);
    }
  return (
    <HomeContainer>
      <HomeWrap>
        <HomeHeader>
          <HomeLogo src={logo} />
          <NavWrap>
          Signed in as {displayName()} 
          
          <Button  onClick={() => {signOut()}}>LOGOUT</Button>

          </NavWrap>

         
        </HomeHeader>

        <TabHeaders>
          {PageData.tabData.map((header, index) => (
            <TabText
              key={index}
              onClick={() =>handleToggle(index)}
            //   clicked={toggle}
              
            >
              {header}
            </TabText>
          ))}
        </TabHeaders>

        <PageForm index={index} />
      </HomeWrap>
    </HomeContainer>
  )
}

export default Home
