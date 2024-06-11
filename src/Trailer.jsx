import React from 'react'
import { Link,useParams } from 'react-router-dom'
import "./Trailer.css";

const Trailer = ({movies}) => {
    const {id} = useParams();
    const foundMovie = movies.find((el)=> el.id === +id)
  return (
    <div>
        <br />
        <h2 className="title">{foundMovie.title}</h2>
        <br />
      <iframe width="560" 
      height="315" 
      src={foundMovie.trailer} 
      title="YouTube video player" frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
         allowfullscreen>

         </iframe>
         <br />
         <br />
         <h3 className="description">{foundMovie.description}</h3>
         <br />
         <Link to={"/"}><button className="but">Home</button></Link>
    </div>
  )
}

export default Trailer
