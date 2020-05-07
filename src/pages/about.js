import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About me</h2>
      <h3>The Short</h3>
      <p>I'm an aspiring web developer working in London, UK. I specialize in frontend development and love creating great user interactions and things for the web.</p>
      <h3>The Long</h3>
      <p>I looked into web development as career when I built my photography website by teaching myself the basics of HTML and CSS. To find out if I still enjoyed building things for the web, I took part in Udacity's Google Developer Challenge Scholarship which I completed and then received and successfully completed a full six month Google Developer Nanodegree Scholarship. 
        Since I have not looked back and enjoy every minute.</p>
      <p>During the day I work as a compliance coordinator and in my spare time I create and build websites and apps and working on university curriculum. Right now I enjoy developing using React and the JAMStack(a fullstack of sorts) and in the long term, if not already, I plan to become a fullstack developer. I'm open minded to
      learning new tech to keep myself open to job opportunities.</p>
    </Layout>

  )
}

export default About
