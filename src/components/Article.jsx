// Article component - displays a single blog post
// Connected to: ArticleList.jsx (receives title, date, and preview as props)

import React from 'react'

const Article = ({ title, date = "January 1, 1970", preview }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article