import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Nav from './components/Nav/Nav';
import Home from './pages/home/Home';
import BoardList from './pages/boardList/BoardList';
import AddBoard from './pages/boardList/comporent/AddBoard';
import ViewBoard from './pages/boardList/comporent/ViewBoard';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
// import { useSelector } from 'react-redux';

function Router() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (sessionStorage.token) setIsAuth(true);
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* --------------------PrivateRoute------------- */}
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/addboard" element={<AddBoard />} />
        </Route>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/viewboard/:userId" element={<ViewBoard />} />
        </Route>
        {/* --------------------------------------------- */}
        <Route path="/boardlist/*" element={<BoardList />} />
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
