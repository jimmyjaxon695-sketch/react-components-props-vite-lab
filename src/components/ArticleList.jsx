// ArticleList component - renders a list of all blog posts
// Connected to: App.jsx (receives posts as prop), Article.jsx (renders one per post)

import React from 'react'
import Article from './Article'

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  )
}

export default ArticleList