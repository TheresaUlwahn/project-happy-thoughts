import React from "react"
import moment from "moment" // this is to format the date
import "./happyThought.css"

const url = "https://technigo-thoughts.herokuapp.com/_ID/like"

export const HappyThought = props => {
  const { message, hearts, createdAt, _id } = props.thought
  
const handleClick = () => {
  console.log ("clicking!", _id)
  fetch (url, {
    method: "POST",
    body: "",
    headers: {"Content-Type": "application/json"}
  }).then(() => props.onLiked(_id))
}

  return (
    <article className='happy-thought'>
      <h3>{message}</h3>
      <p>
     <button onClick={handleClick}>
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
