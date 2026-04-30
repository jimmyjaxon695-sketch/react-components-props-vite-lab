// Header component - displays the blog name at the top of the page
// Connected to: App.jsx (receives name as prop)

import React from 'react'

const Header = ({ name }) => {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  )
}

export default Header