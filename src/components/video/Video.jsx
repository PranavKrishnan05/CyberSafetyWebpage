import React from "react"
import "./video.css"
import { video } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.min.css';
export const Video = () => {
  return (
    <>
          <br></br>
      <br></br>
      <section className='video'>
        <div className='container grid3'>
          {video.map((item) => (

            <div className='box boxItems' key={item.id}>
            <div>
            <iframe width="400" height="180" src={item.link} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                  <h3>{item.title}</h3>
                
                  <p>{item.desc.slice(0, 250)}</p>                
              </div>
            </div>
          ))}
        </div>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
    </>
  )
}
