 
import React, { useState } from "react"
import "./happyForm.css"

export const HappyForm = props => {
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    props.onFormSubmit(message) // this onFormSubmit is sent as a props to App.js
    setMessage("")
  }

  return (
    <form className='happy-form'>
      <h3>What's making you happy right now?</h3>
      <textarea
        rows='3'
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className='form-footer'>
        <button 
          className='happy-button'
          type='submit'
          onClick={handleSubmit}
          disabled={message.length < 6 || message.length > 140 ? true : false}
        >
          <span role='img' aria-label='Heart' >
            {"❤️ "}
          </span>
          Post your happy thought!
          <span role='img' aria-label='Heart' >
            {"❤️ "}
          </span>
        </button>
        <p>{message.length} / 140</p>
      </div>
    </form>
  )
}
