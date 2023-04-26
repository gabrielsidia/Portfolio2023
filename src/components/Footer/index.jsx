import React, {useState} from 'react'
import styled from 'styled-components'
import { FiMail, FiPhoneCall } from 'react-icons/fi'
import { MdAlternateEmail } from 'react-icons/md'
import { AiOutlineMail, AiOutlineArrowUp } from 'react-icons/ai'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { Slide, Zoom } from 'react-awesome-reveal'
import emailjs from '@emailjs/browser'

const Footer = () => {
    const scrollUp = () => {
        window.scroll({
            top:0,
            behavior: 'smooth'
        })
    }

    const [nome, setNome] = useState('');
    const[email, setEmail] =useState('');
    const[mensagem, setMensagem] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        if(nome === '' || email === '' || mensagem === '') {
            alert('Preencha todos os campos')
        }
        const templateParams = {
            from_name: nome,
            message: mensagem,
            email: email
        }

        emailjs.send('service_a51d43r', 'template_1gglz97', templateParams, 'ngx6OPHw9U8gEmOIF')
        .then((response) => {
            console.log('Email enviado com sucesso!', response.status, response.text)
            
            setMensagem('');
            setNome('');
            setEmail('');

        },(error) => {
            console.log('ERRO: ', error)
        }
        )
    }

  return (
    <Container id='footer'>
        <Profile>
           <Slide direction='left' delay={1}><h1>Portfólio</h1></Slide>
            <div className="infos">
                <h1>Manaus - Amazonas - 2023  </h1>
            </div>
            <div className="links">
                <h1>Entre em contato:</h1>
                <div>
                    <span><FiPhoneCall/></span>
                    <a href="">+55 (92) 99279-5598</a>
                </div>
                <div>
                    <span><AiOutlineMail/></span>
                    <a href="gribeiromaia736@gmail.com">gribeiromaia736@gmail.com</a>
                </div>
            </div>
            <div className="profiles">
                <h1>Cheque minhas redes</h1>
                <div className="icons">
                   <Zoom><span><a href=""><BsGithub/></a></span></Zoom>
                    <Zoom><span><a href=""><FaLinkedin/></a></span></Zoom>
                    <Zoom><span><a href=""><FaInstagram/></a></span></Zoom>
                </div>
            </div>
            <ArrowUp onClick={scrollUp}><AiOutlineArrowUp/></ArrowUp>
        </Profile>
        <Form>
            <form onSubmit={sendEmail}>
                <div className="name">
                    <span><CgProfile/></span>
                    <input type="text" 
                    placeholder='Nome completo'
                    value={nome}
                    onChange={(e) => {
                        setNome(e.target.value)
                    }}
                    />
                </div>
                <div className="email">
                    <span><MdAlternateEmail/></span>
                    <input type="text" 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    />
                </div>
                <div className="message">
                    <span className='messageIcon'><FiMail/></span>
                  <textarea 
                  placeholder='Mensagem...' 
                  cols="30" 
                  rows="10"
                  value={mensagem}
                  onChange={(e) => {
                    setMensagem(e.target.value)
                  }}
                  ></textarea>
                </div>
                <button>Enviar</button>
            </form>
        </Form>
    </Container>
  )
}

export default Footer

export const Container = styled.div `
    margin-top:2rem;
    position:relative;
    justify-content:space-between;
    display:flex;
    padding:2rem 0;
    width:80%;
    max-width:1280px;
    margin:0 auto;
    @media(max-width: 840px) {
        width:90%;
    }
    @media(max-width: 630px) {
        flex-direction:column;
        gap:3rem;
    }
`
export const Profile = styled.div `
    flex:1;
    .infos {
        padding:1 rem 0;
        h1 {
            font-size:1.2rem
        }
        p {
            width:60%;
            padding-top:0.5rem;
            @media(max-width: 630px) {
            width:100%;
    }
        }
    }
    .links {
        padding-top:1rem;
        h1 {
            font-size:1.2rem;
            margin-bottom: 0.5rem;
        }
        div {
            display:flex;
            align-items:center;
            gap:0.5rem;
        }
        a {
            text-decoration:none;
            color:lightgray;
            :hover {
                color:orange;
            }
        }
        span {
            color:#01be96;
            font-size:1.2rem;
            padding-top:0.2rem
        }
    }
    .profiles {
        h1 {
            font-size:2rem;
            padding:1rem 0;
        }
        .icons {
            display:flex;
            align-items:center;
        }
        span {
            display:flex;
            align-items:center;
            justify-content:center;
            background-color:#01be96;
            width:2rem;
            height:2rem;
            margin-right:0.5rem;
            border-radius:50px;

            :hover {
                background-color:orange;
            }
            
            a{
                margin-top:0.2rem;
                color:white;
            }
        }
    }
`

export const ArrowUp = styled.div `
    width:2rem;
    height:2rem;
    background-color:#01be96;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    font-size:1.3rem;
    margin-top:2rem;
    @media(max-width: 630px) {
        position:absolute;
        right:3rem;
        top:16rem;
    }
`
export const Form = styled.div `
    flex:1;
    h1 {
        font-size:1.3rem;
        padding-bottom:0.7rem;
    }

    form {
        padding:0.8rem;
        background-color:#191923;
        border-radius:6px;
        .name, .email, .message {
            display:flex;
            border:1px solid gray;
            margin-bottom:0.5rem;
            input, textarea {
                width:100%;
                border:none;
                outline:none;
                color:#fff;
                font-weight:600;
                background-color:transparent;
                padding: 1rem 0.5rem
            }
            span {
                background-color:#3e3e3e;
                width:3rem;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .messageIcon {
                align-items:flex-start;
                padding-top:0.9rem
            }
        }
            button {
                width:7rem;
                height:2rem;
                border-radius:6px;
                border:none;
                background-color:#01be96;
                color:white;
                font-weight:600;
                cursor:pointer;

            }
    }
`