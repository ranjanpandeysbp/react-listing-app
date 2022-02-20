import TopBar from "./components/topbar/TopBar";
import React, { useEffect, createContext, useReducer, useContext } from "react";
import Home from "./pages/homepage/Home";
import Detail from "./pages/listingdetail/Detail";
import CreateListing from "./pages/create-listing/CreateListing";

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { initialState, reducer } from './reducers/userReducer';

export const UserContext = createContext();

const CustomRouting = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'USER', payload: user });
      navigate('/');
    } else {
      navigate('/login');
    }
  }, []);//called only once when component loads/mounts

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/detail/:id" element={<Detail />} />
      <Route exact path="/create" element={<CreateListing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
      <Router>
        <div >
          <TopBar />
          <CustomRouting />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
