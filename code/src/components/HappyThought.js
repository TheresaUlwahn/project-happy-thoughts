import React from 'react'
import moment from "moment"
import 'components/happyThought.css'

export const HappyThought = props => {
    const {message, hearts, createdAt} = props.thought
     
    return (
        <article className='happy-thought'>
            <h3>{message}</h3>
            <p>
                <span role='img' aria-label='Heart'>
                    {"❤️ "}  
                </span>
                x {hearts}
            </p>
            <p>{moment(createdAt).fromNow()}</p>
        </article>
    )

}