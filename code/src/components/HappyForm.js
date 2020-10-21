 import React, { useState } from "react"
import "./happyForm.css"


// Component HappyForm composes the message/ sending props and using a hook for the message with useState
export const HappyForm = props => {
  const [message, setMessage] = useState("")  //For the Form part

  const handleSubmit = event => {
    event.preventDefault() // to not make it reload again
    props.onFormSubmit(message) // this onFormSubmit is sent as a props to App.js
    setMessage("")
  }


  return (
    // Form for sending Happy thoughts 
    <form className='happy-form'>
      <h3>What's making you happy right now?</h3>
      <textarea
        rows='3'
        // Declared state, setMessage value of the message, onChange / sends the message with submit button
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      
      {/* Form submit button */}
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
