import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal'
import styled from 'styled-components'
import fotoo  from './me.png'

const About = () => {
  return (
    <>
    <Title id='about'>
      <Slide delay={1}>
    <h1>Sobre mim</h1>
    </Slide>
    </Title>
    <Container>
      <PictureProfile>
         <div className="img">
                <img src={fotoo} alt="" />
          </div>
          <div className="text">
            {/* <Zoom> */}
              <p >😃 Olá, me chamo Gabriel Maia e sou estudante de Desenvolvimento de Software, com conhecimentos em: <Verde>HTML, CSS, Bootstrap, JavaScript, TypeScript,
                React.js, Next.js, NodeJS, SQL, Git</Verde> e atualmente estou estudando <Verde>Node e <Verde></Verde>Testes Automatizados</Verde>. Tenho inglês avançado e estou aprimorando a conversacao, e curso Análise e Desenvolvimento de Sistemas pela Universidade Estácio estando no 3 período.
              👉 Me considero uma pessoa esforçada, ágil e persistente em tudo aquilo que vou fazer. Sempre procuro aprimorar meus conhecimentos e gosto de desafios e de poder aprender coisas novas. </p>
              {/* </Zoom> */}
          </div>
      </PictureProfile>
    </Container>
      </>
  )
}

export default About

export const Container = styled.div `
    display:flex;
    position:relative;
    justify-content:space-between;
    margin-top:2rem;
    display:flex;
    padding:2rem 0;
    width:80%;
    max-width:1280px;
    margin:0 auto;
`
export const Title = styled.div `
  padding:0rem 0 4rem 0;
  text-align:center;
  font-size:1.5rem;

  :hover {
    color:#01be96;
    transition:1.2s;
    
  }
  @media(max-width:700px) {
    padding-top: 18px;
  }
`

export const PictureProfile = styled.div `
  width:100%;
  display:flex; 
  /* justify-content:space-between; */
  padding-bottom:2rem;
  
  .img  img{
    padding-bottom: 2rem;
    width:470px;
    height:420px;
    border-radius:80px;

    :hover {
      transform: translateY(-15px);
      transition:1.2s;
    }
    p span {
      color:#01be96;
    }

    @media (max-width: 760px) {
      width: 16rem;
      height: 20rem;
      margin-left:3rem;   
    }
  }
  .img {
    @media (max-width: 760px) {
      margin-left:0rem;   
    }
  }

  .text {
   justify-content: center;
    align-items: center;
    padding-top:3.5rem;
    font-size:18px;
    letter-spacing:0.1rem;
    line-height:1.8rem;
    padding-left: 3rem;
    

    @media (max-width: 790px) {
      margin-top: 17rem;
      width: 100%;
      margin-left: -20rem;
      padding-left: 2rem;
    }
  }
`  
export const Verde = styled.span`
    color:#01be96;
    font-weight:600;
`  
