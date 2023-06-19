import React from "react"
import "./blog.css"
import { blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

export const Card = () => {
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {blog.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details'>
                  <a href='/'>#{item.category}</a>
                </div>
                <Link to={`/details/${item.id}`} className='link'>
                <h3>{item.title}{"\nClick Here To Read More..."}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className='date'>

                </div>
              </div>
          ))}
        </div>
      </section>
    </>
  )
}
