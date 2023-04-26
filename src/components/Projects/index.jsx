
import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import styled from 'styled-components'
import SliderComp from './Slider'

const Projects = () => {
  return (
    <Container id='project'>
      <Zoom>
        <h1>Conheça os meus Projetos mais recentes: </h1>
        <p>Veja alguns dos meus projetos utilizando tecnologias e linguagens como:
          React.js, Node.js, Javascript, TypeScript, HTML, CSS e seus frameworks e bibliotecas.
        </p>
      </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects

const Container = styled.div`
    width:80%;
    max-width:1280px;
    margin:0 auto;
    text-align:center;
    margin-top:5rem;
    padding: 2rem 0;
    @media(max-width: 840px){
        width: 90%;
    }

    h1 {
        font-size:1.9rem
    }
    p{
        width:28rem;
        margin:0 auto;
        padding:1rem 0;
        font-size:0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
`

const Slide = styled.div ``

