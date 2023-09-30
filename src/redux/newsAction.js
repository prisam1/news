import axios from 'axios'

const API_KEY = '83ff12a7085541c2908f9e00b8499e02' 
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines'
const COUNTRY = 'in'

export const fetchNews = () => async (dispatch) => {
  try {
    const headers = {
      'User-Agent': 'YourUserAgent',
      'Upgrade': 'HTTP/1.1',
    };

    const response = await axios.get(`${NEWS_API_URL}?country=${COUNTRY}&apiKey=${API_KEY}`, {
      headers,
    })

    dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: response.data.articles })
  } catch (error) {
    dispatch({ type: 'FETCH_NEWS_FAILURE', payload: error.message })
  }
}
