import React from "react"
import "./facts.css"
import { facts } from "../../assets/data/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { GrFormPrevious } from "react-icons/gr"
import { MdKeyboardArrowRight } from "react-icons/md"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdKeyboardArrowRight className='icon' />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  )
}
export const Facts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
  };
  

  return (
    <>
    <section className='facts'>
      <div className='content'>
        <Slider {...settings}>
          {facts.map((item) => (
            
            <div className='boxs'>
              <div className='box' key={item.id}>
              
                <img src={item.cover} alt='cover' />
                <div className='overlay'>
                
                  <h4>{item.facts}</h4>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  </>
)
}
