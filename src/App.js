import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import Error from "./pages/Error/Error"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/HanNguyen_13_030522/"
            element={<Navigate to="/home" replace />}
          />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
