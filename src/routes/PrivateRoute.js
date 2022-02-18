import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = props => {
  const ele =
    !sessionStorage.getItem('token') && alert('로그인이 필요한 페이지입니다');

  return ele ? <Navigate replace to="/signin" /> : <Outlet />;
};
export default PrivateRoute;
