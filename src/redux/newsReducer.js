const initialState = {
  articles: [],
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS':
      return { ...state, articles: action.payload, error: null };
    case 'FETCH_NEWS_FAILURE':
      return { ...state, articles: [], error: action.payload };
    default:
      return state;
  }
};

export default newsReducer
