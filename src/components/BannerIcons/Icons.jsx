import React from 'react'
import styled from 'styled-components'

const Icons = (props) => {
    const {Icon, link} = props
  return (
      <DivIcones >
                <h2><TitleIcon href={link} target='_blank'><Icon/></TitleIcon></h2>
        </DivIcones>
    
  )
}

export default Icons

export const Span = styled.span `
    color:white;
`
export const TitleIcon = styled.a`
    color:#01be96;
    font-size:32px;

    :hover {
        color:white;
        transition:0.8s;
    }
    @media (max-width: 760px) {
        font-size: 22px;
        display: flex;
    }
`
export const DivIcones = styled.div `
    
`