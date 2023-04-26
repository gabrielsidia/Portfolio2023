import React from 'react'
import Slider from 'react-slick';
import Project from './Project';
import frutaria from './img/frutaria.png'
import fort from './img/fortnite.png'
import jogo from './img/secretWord.png'
import siteMusica from './img/siteMusica.png'

let data = [//Criar uma let com img e descricao do que é
  {
    img:"./img/fortnite.png",
    desc1: 'Projeto feito em React.js com o intuito de treinar o controle de estados',
    desc2: 'Pagina construida com o intuito de treinar e alinhar propriedades CSS',
    desc3:'Site criado utilizando flexbox e grid para treinar conceitos do Front',
    desc4:'Frutaria criada com base em um projeto, com roteamento e dinamicidade do carrinho'
  }
]

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
const SliderComp = () => {
      let sliderProject = ''
      sliderProject = data.map((item, i) => (
        <Project item={item} keyt={i}/>
      ))
  return (
    <div>
      <Slider {...settings}>
    {/* {sliderProject} */}
        <Project img={jogo} desc={data.map((item) => item.desc1)}/>
        <Project img={fort} desc={data.map((item) => item.desc2)} link='https://fortnite-pagina.vercel.app/'/>
        <Project img={siteMusica} desc={data.map((item) => item.desc3)}link='https://site-grid-flexbox.vercel.app/'/>
        <Project img={frutaria} desc={data.map((item) => item.desc4)} link='maia-frutaria-bj5o.vercel.app'/>
        <Project/>
      </Slider>
    </div>
  )
}

export default SliderComp
