import React from "react"
import {
  ConnectWallet,
  LogoImage,
  OnboardContainer,
  OnboardHeader,
} from "./onboard.style"
import logo from "../../assets/logo.png"
import { authenticate } from "../../auth"

const Onboard = () => {
  return (
    <OnboardContainer>
      <LogoImage src={logo}></LogoImage>
      <OnboardHeader> Stackvest </OnboardHeader>
      <ConnectWallet isLoading={false} onClick={authenticate}>
        Connect wallet
      </ConnectWallet>
    </OnboardContainer>
  )
}

export default Onboard
