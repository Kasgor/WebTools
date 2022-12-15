import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import "./App.css";
import ForecastContainer from "./ForecastContainer";
import Login from "./Login";
import { CookiesProvider } from "react-cookie";
import Weather from './weather';
function App() {
 
  return(

  <BrowserRouter>
  <>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/weather" element={<ForecastContainer />} />
  </Routes>
  </>
  </BrowserRouter>
 
  )
}

export default App;