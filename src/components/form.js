import React from 'react'

import formStyles from './form.module.scss'

const Form = () => {
  return (
    <div className={formStyles.formContainer}>
      <form method="post" action="https://formspree.io/chris.carr.dev@gmail.com">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required/>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required/>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required/>
        <input type="text" name="_gotcha" className={formStyles.gotcha} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Form