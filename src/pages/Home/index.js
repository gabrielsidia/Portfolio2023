import Banner from 'components/Banner'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Container } from 'components/Header/Header.elements'
import Projects from 'components/Projects'
import Services from 'components/Services'
import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import About from 'components/About'


const Home = () => {
  return (
    <>
    <Container>
        <Header/>
    </Container>
        <Banner/>
        <About/>
        <Services/>
      <Project>
        <Projects/>
      </Project>
      <Project>
        <Footer/>
      </Project>
    <Container/>
    </>
  )
}

export default Home

const Project = styled.div `
  background-color:linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)
`
