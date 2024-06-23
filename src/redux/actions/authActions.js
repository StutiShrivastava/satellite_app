export const login = (user) => {
    localStorage.setItem('authUser', JSON.stringify(user));
    return {
      type: 'LOGIN',
      payload: user
    };
  };
  
  export const logout = () => {
    localStorage.removeItem('authUser');
    return {
      type: 'LOGOUT'
    };
  };
  
  export const checkAuthStatus = () => {
    return (dispatch) => {
      const user = JSON.parse(localStorage.getItem('authUser'));
      if (user) {
        dispatch(login(user));
      }
    };
  };
  