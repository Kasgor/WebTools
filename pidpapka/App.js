import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import "./App.css";
import Login from "./Login";
import { CookiesProvider } from "react-cookie";
import Weather from './weather';

function App() {
 
  return(
  <CookiesProvider>
  <BrowserRouter>
  <>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/weather" element={<Weather />} />
  </Routes>
  </>
  </BrowserRouter>
 </CookiesProvider>
  )
}

export default App;
