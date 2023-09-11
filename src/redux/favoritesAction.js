export const addFavorite = (article) => {
    return {
      type: "ADD_FAVORITE",
      payload: article,
    };
  };
  
  export const removeFavorite = (articleId) => {
    return {
      type: "REMOVE_FAVORITE",
      payload: articleId,
    };
  };
  