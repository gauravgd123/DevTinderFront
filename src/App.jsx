import React from "react";
import { NavBar } from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div>Body</div>}>

            <Route path="/login" element={<div>login </div>}>Login Page</Route>
            <Route path="/profile" element={<div>profile</div>}>Profile Page</Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
      <NavBar />
      <h1>Hello everyone</h1>
    </>
  );
}

export default App;
