import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../Services/theNews";
import { setArticles } from "../redux/slice/newsSlice";

export const useNews = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.news.filters);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const data = await fetchNews(filters);
        dispatch(setArticles(data));
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(() => {
      getNews();
    }, 600);

    return () => clearTimeout(debounceTimeout);
  }, [filters, dispatch]);

  return { loading, error };
};
