import React from "react"
import "./video.css"
import { video } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.min.css';
export const Video = () => {
  return (
    <>
      <section className='video'>
        <div className='container grid3'>
          {video.map((item) => (

            <div className='box boxItems' key={item.id}>
            <div className="ratio ratio-16×9">
              <iframe src={item.link} title="YouTube video" allowfullscreen></iframe> 
               </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                  <h3>{item.title}</h3>
                
                  <p>{item.desc.slice(0, 180)}...</p>                
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
