import React from "react"
import moment from "moment" // this is to format the date
import "./happyThought.css"

// const url = "https://project-happy-thoughts-api.herokuapp.com/${_id}/like"

// function for the thoughts that are posted one at a time and can get likes by clicking the heart button
export const HappyThought = props => {
  const { message, hearts, createdAt, _id } = props.thought

// function for the click on the unique thought 
const handleClick = () => {
  console.log ("clicking!", _id)
  fetch (`https://project-happy-thoughts-api.herokuapp.com/${_id}/like`, {
    method: "POST",
    body: "",
    headers: {"Content-Type": "application/json"}
  }).then(() => props.onLiked(_id))
}

  return (
    // List with meassages of Happy thoughts
    <article className='happy-thought'>
      <h3>{message}</h3>
      <p>
        {/* Heart/like button */}
      <button 
        className='happy-heart' 
        onClick={handleClick}>
          <span role='img' aria-label='Heart' >
            {"❤️ "}
          </span>
        
      </button>     
        x {hearts}
      </p>
      <p>{moment(createdAt).fromNow()}</p>
    </article>
  )
}
