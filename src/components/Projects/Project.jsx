import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Project = ({ img, desc, link }) => {//Props já passadas
  return (
   <Container className='project'>
    <img src={img} alt=""></img>{/*Substituir as props aqui */}
    <div className="disc" >
        <p>{desc}
            <a href={link} target='_blank'>Acessar projeto</a>
            </p>
    </div>
   </Container>
  )
}

export default Project

const Container = styled.div`
    height:10rem;
    background-color:#4e5156;
    margin:0 0.5rem;
    border-radius:5px;
    padding:0 0.3rem;
    border-radius:5px;
    cursor: pointer;
    position:relative;
    overflow:hidden;
    :hover{
     transform:scale(1.12);
     transition:1.2s
    }

    img {
      width:100%;
      height:100%;
      object-fit: cover;
    }

    .disc {
      position:absolute;
      right:0;
      left:0;
      bottom:-10rem;
      text-align:left;
      padding: 0.5rem;
      background: linear-gradient(rgba(0,0,0,0.100), rgba(0,0,0,0.80))
    }
    h1 {
      font-size:1.2rem;
    }
    p {
      width:90%;
      font-size:0.9rem;
      font-weight: 500;
      a {
        margin-left:0.4rem;
        color:#01be96;
        border: 1px solid #01be96;
        font-weight:700;
        padding:2px;
      }
    }

    :hover > img {
      transform:scale(1.3);
      transition:1.3s;
    }

  :hover > .disc {
    bottom:0;
  }
`
