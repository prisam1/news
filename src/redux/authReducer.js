const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case 'REGISTER_FAILURE':
    case 'LOGIN_FAILURE':
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer
