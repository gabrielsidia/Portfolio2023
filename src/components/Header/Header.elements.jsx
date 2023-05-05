import styled from "styled-components";

export const Container = styled.div `
display: flex;
align-items: center;
width: 90%;
justify-content: space-between;
position: relative;
margin: 0 auto;
background-color: #191923;
animation: header 500ms ease-in-out;
padding: 1.5rem;
  @media(max-width:820px) {
  width: 100%;
}
.bars {
  display: none;
}
  @media(max-width:640px) {
  .bars {
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:1rem;
    z-index: 100;
    .bar {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${props => props.bar ? 'transparent' : '#fff'};
      :before, :after {
          content: '';
          width:100%;
          height: 2px;
          background-color: white ;
          position: absolute;
        }
        :before {
          transform: ${props => props.bar ? 'rotate(45deg)' :  'translateY(10px)'};
          transition: all 400ms ease-in-out;
        }
        :after {
          transform: ${props => props.bar ? 'rotate(-45deg)' :  'translateY(-10px)'};
          transition: all 400ms ease-in-out;
        }
      
    }
  }
}
`
export const Logo = styled.div `
display: flex;
align-items: center;
gap: 0.5rem;
span {
    font-size: 1.8rem;
    color: #01be96;
}
h1{
    font-size:2rem;
    &:hover {
    color: #01be96;
    transition: 1.2s;
}
@media(max-width: 700px){
    display: flex;
    justify-content: flex-start;
}

}  
`
export const Nav = styled.div `
@media(max-width: 640px){
    position: fixed;
    display: flex;
    flex-direction: column;
    inset: 0;
    justify-content: center;
    background-color: #01be96;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${props => props.bar ? '100vh' : '0vh'};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
}

span {
    margin-left:2.5rem;
    font-size: 19px;
  }

a {
    text-decoration: none;
    font-weight: 500;
    position: relative;
    color: white;
      &:hover {
        color: #01be96;
        transition: 1.2s; 
        cursor: pointer;
        opacity: 0.9;
    }
      :before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin:right;
        transition: height 400ms ease-in-out;
  }
    :hover:before {
      transform: scale(1);
      transform-origin:left;
    }
    :hover {
      opacity: 0.7;
    }
  
}
  
`