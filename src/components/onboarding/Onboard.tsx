import React from "react"
import { ConnectWallet, LogoImage, OnboardContainer, OnboardHeader } from "./onboard.style"
import logo from "../../assets/logo.png"

const Onboard = () => {
  return (
    <OnboardContainer>
      <LogoImage src={logo}></LogoImage>
      <OnboardHeader> Stackvest </OnboardHeader>
      <ConnectWallet>Connect wallet</ConnectWallet>
    </OnboardContainer>
  )
}

export default Onboard
