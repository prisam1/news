import { auth } from '../firebase'

export const register = (email, password) => async (dispatch) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password)
    dispatch({ type: 'REGISTER_SUCCESS' })
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error.message })
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
    dispatch({ type: 'LOGIN_SUCCESS' })
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message })
  }
}

export const logout = () => async (dispatch) => {
  try {
    await auth.signOut()
    dispatch({ type: 'LOGOUT_SUCCESS' })
  } catch (error) {
    dispatch({ type: 'LOGOUT_FAILURE', payload: error.message })
  }
}
