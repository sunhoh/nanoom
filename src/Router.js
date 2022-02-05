import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/home/Home';
import Main from './pages/Main/Main';
import BoardList from './pages/boardList/BoardList';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route
          exact={true}
          path="/"
          render={(props) => <Main  {...props} />}
        /> */}
        <Route path="/" element={<Home />} />
        <Route path="/boardlist" element={<BoardList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
