import React, { useState } from "react"
import styled from "styled-components"   
import NavLinks  from './NavLinks'
import '../components/nav.css'
import '../styles/custom.css'



const Navigation = styled.nav`
 /* height: 10vh;*/
  display: flex;
  background-color:#1178AD;
  position: relative;
  justify-content: space-between;
  /*border-bottom: 2px solid #33333320;*/
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 960px) {
    position: fixed;
    height: 8vh;
    top: 5px;
    left: 0;
    background-color:transparent;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 960px) {
    display: flex;
    z-index:10000;
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px 5px;
    margin: 5px;
    background-color:#ccc;  
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
    position: fixed;
   /* width: 100%;*/
    background-color: black;
    justify-content: flex-start;
    padding-top: 10vh;
    transition: all 0.3s ease-in;
   /* top: 8vh; */
    right: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  position:fixed;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    top:25px; z-index : 20;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
 
           <Navigation role="navigation" aria-label="Main">
           <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
   <NavLinks />
    </Navbox>
      ) : (
        <Navbox open>
       <NavLinks />
        </Navbox>
      )}
  </Navigation>
 
    )}
    export default Navbar