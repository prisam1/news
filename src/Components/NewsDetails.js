import React from 'react'

function ArticleDetail({ match, news }) {
  const { title } = match.params
  const article = news.articles.find((article) => article.title === title)

  if (!article) {
    return <div>Article not found.</div>
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail