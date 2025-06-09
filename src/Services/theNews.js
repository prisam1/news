import axios from "axios";

const API_KEY = "pub_d943f33333c148b08a3857042cbec269";
const BASE_URL = "https://newsdata.io/api/1/news";

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
