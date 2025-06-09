import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/slice/newsSlice";
import { useNews } from "../hooks/useNews";
import "../styles/news.css";

const NewsApp = () => {
  const dispatch = useDispatch();
  const { articles, filters } = useSelector((state) => state.news);
  const { loading, error } = useNews();

  const handleChange = (e) => {
    dispatch(setFilters({ [e.target.name]: e.target.value }));
  };

  console.log("->", articles);

  return (
    <div className="news-container">
      <h1 className="news-title">The News</h1>

      <div className="filters">
        <select name="country" value={filters.country} onChange={handleChange}>
          <option value="">All</option>
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="gb">UK</option>
        </select>

        <select
          name="language"
          onChange={handleChange}
          value={filters.language}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>

        <select
          name="category"
          onChange={handleChange}
          value={filters.category}
        >
          <option value="">All</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
        </select>

        <input
          type="text"
          name="search"
          placeholder="Search News..."
          value={filters.search}
          onChange={handleChange}
        />
      </div>

      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">Error loading news</p>}

      <div className="news-layout">
        <div className="main-news">
          {articles.length == 0 ? (
            <h2>No news found!</h2>
          ) : (
            <>
              <h2>Breaking News</h2>
              <div className="articles">
                {articles.map((article) => (
                  <div key={article.article_id} className="article-card">
                    {article.image_url && (
                      <img src={article.image_url} alt={article.title} />
                    )}
                    <h3>{article.title}</h3>
                    <p>{article.description?.slice(0, 120)}...</p>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsApp;
