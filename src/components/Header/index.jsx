import React, { useState } from 'react'
import { IoLogoPlaystation } from 'react-icons/io'
import { Container, Nav, Logo } from './Header.elements'


const Header = () => {
  const [bar, setBar] = useState(false)
  return (
    <>
      <Container id='home' bar={bar}>
        <Logo>
            <span><IoLogoPlaystation/></span>
            <h1>Gabriel Maia</h1>
        </Logo>
        <Nav bar={bar}>
           <span><a href='#home'>Início</a></span> 
           <span><a href='#services'>Serviços</a></span> 
           <span><a href='#project'>Projetos</a></span> 
           <span><a href='#about'>Sobre Mim</a></span> 
           <span><a href='#footer'>Contato</a></span> 
        </Nav>
        <div
        onClick={() =>  setBar(!bar) }
        className="bars">
          <div className="bar"></div>
        </div>
      </Container>
    </>
  )
}

export default Header

