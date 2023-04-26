import React from 'react'
import styled from 'styled-components'

const Card = (props) => {
  const{Icon, desc, title} = props
  return (
    <div>
      <Container>
        <span><Icon/></span>
        <h2>{title}</h2>
        <p>{desc}</p>
      </Container>
      
    </div>
  )
}

export default Card

const Container = styled.div `
  width:100%;
  background:linear-gradient(159deg, rgb(45,45,58) 0%, rgb(43, 43, 53)100%);
  padding:1rem;
  text-align:center;
  @media (max-width:840px){
    width:90%;
  }
  &:hover {
    transform: scale(1.1);
            transition: 1.3s; 
            cursor: pointer;
            opacity: 0.9;
  }

  span{
    font-size:1.7rem;
  }
  h2{
    font-size:1.5rem;
    padding-bottom:1rem;
  }
  p{
    padding-bottom:0.8rem;
  }
`

