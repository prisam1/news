import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = process.env.REACT_APP_NEWS_BASE_URL;

export const fetchNews = async (filters) => {
  const params = {
    apikey: API_KEY,
    language: filters.language || "en",
    category: filters.category || undefined,
    q: filters.search || undefined,
    country: filters.country || undefined,
  };

  const { data } = await axios.get(BASE_URL, { params });
  return data.results || [];
};
