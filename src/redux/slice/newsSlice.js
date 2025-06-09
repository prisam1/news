import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    loading: false,
    error: null,
    filters: {
      language: "en",
      category: "",
      search: "",
      country: "in",
    },
  },
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setArticles, setFilters } = newsSlice.actions;
export default newsSlice.reducer;
