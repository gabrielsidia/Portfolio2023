import React from 'react'
import styled from 'styled-components'

const IconsMedia = (props) => {
    const {Icon, link} = props
  return (
      <div className='social-icons'>
                <Span><TitleIcon href={link} ><Icon/></TitleIcon></Span>
        </div>
    
  )
}

export default IconsMedia

export const Span = styled.h2 `
    padding:0 20px;
    @media (max-width: 660px) {
      padding-top: 2rem;
      padding-left: 3rem;
    }
`
export const TitleIcon = styled.a`
    color:#C0C0C0;
    font-size:25px;
    @media (max-width: 660px) {
      font-size: 22px;
    }
    

    :hover {
        color:#01be96;
        transition:0.8s;
    }
`


