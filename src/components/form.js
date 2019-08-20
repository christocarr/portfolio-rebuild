import React from 'react'

import formStyles from './form.module.scss'

const Form = () => {
  return (
    <form method="post" action="https://formspree.io/chris.carr.dev@gmail.com">
      <label htmlFor="name">Name</label>
      <input id="name" name="name"></input>
      <label htmlFor="email">Email</label>
      <input id="email" name="email"></input>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <input type="text" name="_gotcha" className={formStyles.gotcha} />
      <button type="submit">Send</button>
    </form>
  )
}

export default Form