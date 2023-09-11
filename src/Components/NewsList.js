import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../redux/newsAction'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import firebase from 'firebase/compat/app'

function NewsList() {
  const dispatch = useDispatch()
  const news = useSelector((state) => state.news)
  const [isGridView, setIsGridView] = useState(false)
  const user = auth.currentUser
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    dispatch(fetchNews()) 
    if (user) {
      const favoritesRef = firebase.firestore().collection('favorites').doc(user.uid)
      favoritesRef.get().then((doc) => {
        if (doc.exists) {
          setFavorites(doc.data().favorites);
        } else {
          setFavorites([])
        }
      });
    }
  }, [dispatch, user])

  const toggleGridView = () => {
    setIsGridView(!isGridView)
  }

  const toggleFavorite = (articleId) => {
    if (user) {
      if (user) {
        const favoritesRef = firebase.firestore().collection('favorites').doc(user.uid)
  
        if (favorites.includes(articleId)) {
          const updatedFavorites = favorites.filter((id) => id !== articleId)
          favoritesRef.set({ favorites: updatedFavorites }, { merge: true })
          setFavorites(updatedFavorites)
        }
         else {
          const updatedFavorites = [...favorites, articleId]
          favoritesRef.set({ favorites: updatedFavorites }, { merge: true })
          setFavorites(updatedFavorites)
        }
      }
  }
  }
  return (
    <div>
      <h2>News List</h2>
      <button onClick={toggleGridView}>
        {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
      </button>
      <div className={`news-container ${isGridView ? 'grid' : ''}`}>
        {news.articles.map((article) => (
          <div key={article.id} className={`news-item ${isGridView ? 'grid-item' : ''}`}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <button 
              onClick={() => toggleFavorite(article.id)}
              className={`favorite-button ${favorites.includes(article.id) ? 'favorited' : ''}`}
            >
              &#9825; 
            </button>
            <Link to={`/news/${article.title}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsList