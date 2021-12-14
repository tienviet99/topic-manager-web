/* eslint-disable prettier/prettier */
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props: any) => {
  const isLoggedIn = Boolean(
    localStorage.getItem('accessToken') &&
    localStorage.getItem('secret'),
  );
  return !isLoggedIn ? (
    <Redirect to="/login" />
  ) : (
    <Route {...props} />
  );
};

export default PrivateRoute;
