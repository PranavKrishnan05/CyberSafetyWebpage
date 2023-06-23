import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"
{/*import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/a*i"*/}


export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                {/*<button className='button'>
                 <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                  </button>*/}
              </div>
              <h1>{blogs.title}</h1>
              <br></br>
              <p>{blogs.fulldesc}</p>
              <h6>Author: {blogs.author}</h6>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
