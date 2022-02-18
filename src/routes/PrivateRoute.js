import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // const ele = !sessionStorage.getItem('token')
  if (!sessionStorage.getItem('token')) {
    alert('로그인이 필요한 페이지입니다');
    return <Navigate replace to="/signin" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
