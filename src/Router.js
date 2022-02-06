import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/home/Home';
import BoardList from './pages/boardList/BoardList';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';

function Router() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (!localStorage.token) setIsAuth(false);
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boardlist/*" element={<BoardList />} />
        <Route path="/signin" element={<SignIn setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
