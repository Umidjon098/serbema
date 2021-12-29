import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Mobile from "./components/Navbar/Mobile";
import AddAutor from "./views/AddAutor";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <BrowserRouter>
        <Mobile />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/addautor" element={<AddAutor />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
