import React, {Fragment} from 'react';
import './App.css';
import InputMovie from "./components/InputMovie";
import ListMovie from './components/ListMovie';
import MovieLogin from './components/MovieLogin';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieSignin from './components/MovieSignin';
import Home from './components/Home';
import Trailers from './components/Trailers';



function App() {
  return (
    <Router>
     <Routes>
     <Route exact path="/list" element = {[<InputMovie/>,<ListMovie/>]} />
     <Route exact path="/signup" element={<MovieSignin/>}/>
     <Route exact path="/home" element={<Home/>}/>
     <Route exact path="/trailers" element={<Trailers/>}/>
       <Route exact path="/" element={<MovieLogin/>}/>
       </Routes>
   </Router>
  )};

export default App;