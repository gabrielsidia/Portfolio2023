import React from 'react'
import { FiCodesandbox } from 'react-icons/fi'
import { MdDesignServices } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'
import Card from './Card'
import styled from 'styled-components'
import { Slide } from 'react-awesome-reveal'

const Services = () => {
  return (
    <>
    <Slide delay={1}>
      <Titulo id='services'>Essas são as minhas<Verde>especialidades:</Verde>  </Titulo>
    </Slide>
    <Container>
      
      <Cards>
            <Card  
              Icon={CgWebsite}
              title='Front End'
              desc = 'Desenvolvedor Front End, utilizando React.js, Typescript, JavaScript e Node como tecnologias para desenvolvimento'
          />
                <Card
              Icon={FiCodesandbox}
              title='Back End'
              desc = 'Desenvolvimento Back End, com a utilização de Node e Express para a construção de APIs, junto com banco de dados relacionais e não relacionais.'
          />
        
          <Card
            Icon={MdDesignServices}
            title='Web Designer'
            desc = {`Criação de sites e landing pages, com a utilizacao de Wordpress e Elementor, com funcionalidades criadas com PHP e CSS`}
        />
      </Cards>
    </Container>
    </>
  )
}

export default Services

const Container = styled.div `
    width:100%;
    max-width:1280px;
    margin:0 auto;
    padding:2rem 0;
    @media (max-width: 840px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow-x:hidden;
  }
  
    h2{
        color:#01be96
    }
`
const Titulo = styled.h1 `
    padding-top:1rem;
    text-align:center;
`
const Verde = styled.div `
    text-align:center;
    color:#01be96;
`

const Cards = styled.div`
    display:flex;
    grid-template: repeat(auto-fit, minimax(250px, 1fr));
    margin-top:4rem;
    gap: 1rem;

    @media(max-width:760px) {
      display: flex;
      flex-direction:column ;
      align-items: center;
      margin-left: 3rem;
    }
`