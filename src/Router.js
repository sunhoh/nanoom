import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/home/Home';
import BoardList from './pages/boardList/BoardList';
import AddBoard from './pages/boardList/comporent/Addboard';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import { useSelector } from 'react-redux';

function Router() {
  const [isAuth, setIsAuth] = useState(false);
  const token = useSelector(state => state.token);

  useEffect(() => {
    if (sessionStorage.token) setIsAuth(true);
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boardlist/*" element={<BoardList />} />
        <Route path="/addboard/*" element={<AddBoard />} />
        <Route
          path="/signin"
          element={<SignIn isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
