import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    case 'UPDATE_USER_PROFILE':
      return { user: { ...state.user, profile: action.payload } };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  const login = (user) => {
    dispatch({ type: 'LOGIN', payload: user });
  };
  const logout = () => {
    // Remove user from storage
    localStorage.removeItem('user');

    // Dispatch logout action
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      login(user);
    }
  }, []);
  console.log('AuthContext state:', state);

  return(
    <AuthContext.Provider value={{ ...state, login, logout,dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
