import React, { useEffect, useState } from "react"
import { HappyThought } from "./components/HappyThought"
import { HappyForm } from "./components/HappyForm"


//The url for the Happy thought backend project
const url = "https://project-happy-thoughts-api.herokuapp.com/"
// const url = "https://technigo-thoughts.herokuapp.com/"


export const App = () => {
  const [thoughts, setThoughts] = useState([]) // For the handleSubmit .then
  const [postedMessage, setPostedMessage] = useState("") // list with happy thougts


// useEffect fetches info from backend and posts it in the return
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])


 // Submit and post a Happy thought through mapping on row 49
  const handleFormSubmit = message => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => setPostedMessage(message))
      .catch(err => console.log("error:", err))
  }


  // Heart button fetch 
  const onLiked = (thoughtId) => {
    console.log ("Logging in the App.js", thoughtId)
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }


  return (
    <main>
      {/* picking up the form that is submitted and bring the props, which is the message, row 18 */}
      <HappyForm onFormSubmit={handleFormSubmit} /> 
      {thoughts.map(thought => (
        <HappyThought key={thought._id} thought={thought} onLiked={onLiked} />  
      ))}
     
    </main>
  )
      
}