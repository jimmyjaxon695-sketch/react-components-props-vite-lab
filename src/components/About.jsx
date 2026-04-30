// About component - displays the blog logo and description
// Connected to: App.jsx (receives image and about as props)

import React from 'react'

const About = ({ image = "https://via.placeholder.com/215", about }) => {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  )
}

export default About