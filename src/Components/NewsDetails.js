import React from 'react'

function ArticleDetail({ match, news }) {
  const { id } = match.params
  const article = news.articles.find((article) => article.id === id)

  if (!article) {
    return <div>Article not found.</div>
  }

  return (
    <>
    <h2>{article.title}</h2>
    <p>{article.description}</p>
    <img src={article.image} alt={article.title} />
    <a href={article.fullArticleLink} target="_blank" rel="noopener noreferrer">
      Read Full Article
    </a>
    </>
  )
}

export default ArticleDetail