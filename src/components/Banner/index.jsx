import React from 'react'
import styled from 'styled-components'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin, FaInstagram, FaReact, 
        FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaBootstrap } from 'react-icons/fa'
import { TbSql } from 'react-icons/tb'
import imagem from './imagem.png'
import { SiTypescript, SiJavascript, 
        SiNextdotjs, SiStyledcomponents, SiVercel } from 'react-icons/si'
import Icons from 'components/BannerIcons/Icons'
import IconsMedia from 'components/BannerIcons/IconsMedia'
import { Slide } from 'react-awesome-reveal'

const Banner = () => {
  return (
    <Container>
     {/**<Slide direction='left'>*/}
        <Texts>
            <h3>Olá,<span className='green'> me chamo:</span> </h3>
            <h1>Gabriel Maia</h1>
            <h3>Sou Desenvolvedor de Software.</h3>
            <h4>Procurando sempre melhorar  
                 e especializar minhas habilidades!
            </h4>
            <ListIcons>
                <Icons Icon={SiJavascript}/>
                <Icons Icon={SiTypescript}/>
                <Icons Icon={FaReact}/>
                <Icons Icon={SiNextdotjs}/>
                <Icons Icon={FaNodeJs}/>
                <Icons Icon={TbSql}/>
                <Icons Icon={FaHtml5}/>
                <Icons Icon={FaCss3Alt}/>
                <Icons Icon={SiStyledcomponents}/>
                <Icons Icon={FaSass}/>
                <Icons Icon={FaBootstrap}/>
            </ListIcons>
            <button>Baixe meu CV</button>
            {/*Lista das REDES SOCIAIS */}
            <ListMedia>
                <IconsMedia Icon={FaInstagram}></IconsMedia>
                <IconsMedia Icon={FaLinkedin} link='https://www.linkedin.com/in/gabriel-ribeiro-maia-ba786b223/'></IconsMedia>
                <IconsMedia Icon={BsGithub} link='https://github.com/GabriellMaiaa'></IconsMedia>
                <IconsMedia Icon={SiVercel}></IconsMedia>
            </ListMedia>
        </Texts>
     {/**</Slide>*/}
        <Slide direction='right'>
            <Image>
                <img src={imagem} alt="imagem" />
            </Image>
        </Slide>
    </Container>
  )
}

export default Banner

export const Container = styled.div `
    max-width: 1280px;
    display:flex;
    gap:2rem;
    justify-content:space-between;
    align-items:center;
    margin: 0 auto;
    z-index: 1;
    @media (max-width: 840px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        align-items: center;
  }
  
`
export const Texts = styled.div`
    flex: 1;
@media (max-width: 760px) {
      box-sizing: border-box;
      max-width: 21rem;
      padding-top: 12px;
    }
   
    
    h4 {
        padding:1rem 0.2rem;
        font-weight:500;
        font-size:1rem;
    }
    h1 {
        font-size:2rem;
        letter-spacing:2px;
        color:#01be96;
        
    } h3 {
        font-weight:500;
        font-size:1.2rem;
        text-transform:capitalize;
        padding-bottom:1rem
        
    }
    p {
        font-weight:400;
       
    }
    button {
        padding: 0.7rem 2rem;
        cursor:pointer;
        margin-top:3rem;
        margin-left:3rem;
        background-color:#01be96;
        border:none;
        border-radius:8px;
        font-weight:500;
        color:white;
        font-size:1rem;
        filter: drop-shadow(0px 10px 10px #01be9551);
        &:hover {
            transform: scale(1.2);
            transition: 1s; 
            cursor: pointer;
            opacity: 0.9;
   
        }
        @media(max-width:840px) {
                margin-left:5rem;
        }
    }
`
export const Image = styled.div `
     img {
        width:32rem;
        margin-left:10rem;
        margin-bottom:80px;
        filter:drop-shadow(0px 12px 10px #01be9570);
        transition: transform 400ms ease-in-out;
    } :hover img{
        transform: translateY(-15px);
    }
    @media (max-width: 820px) {
      width: 20rem;
      display: none;
      
    }
    @media (max-width: 660px) {
      width: 18rem;
    }
    @media (max-width: 640px) {
      width: 100%;
      display: none;
    }
`

export const ListIcons = styled.ul`
    display:flex;
    align-items:center;
    gap:12px;
    
    @media (max-width: 760px) {
       
    }
`
export const ListMedia = styled.ul`
    margin-top:20px;
    display:flex;
    padding-top: 12px;
    align-items:center;
    gap:12px;
    @media (max-width: 760px) {
       gap: 0px;
       padding-top:2px;
       padding-right: 12px;
    }
`


