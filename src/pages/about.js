import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About</h2>
      <h3>The Short</h3>
      <p>I'm web designer and developer working in London, UK. I specialize in frontend development.</p>
      <h3>The Long</h3>
      <p>Born in a little city called Pretoria in South Africa I came to the big old city of London to find better opportunities. Too comfortable with what was then a great work but was literally killing me physically and didn't see it as a chosen career path. I needed something else, something that I'll enjoy without breaking my back.</p>
      <p>Thats when I looked further into web development as I frustratingly enjoyed(laying out a site with CSS is tremendously frustrating for a beginner) building my photography website a few years before. Since then I have not looked back.</p>
      <p>Right now I develop with React and the JAMStack(a fullstack of sorts) and in the long term, if not already, I plan to become a fullstack developer. I'm open minded to
      learning new tech to keep myself open to job opportunities.</p>
    </Layout>

  )
}

export default About
