import "./App.css";
import AddProducts from "./pages/AddProducts";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import UpdateProducts from "./pages/UpdateProducts";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { useAuthContext } from "./hooks/useAuthContext";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";

import { useEffect } from "react";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <div id="google_translate_element"></div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Products /> : <Navigate to="/login" />}
          />
          <Route
            path="/add"
            element={user ? <AddProducts /> : <Navigate to="/login" />}
          />
          <Route
            path="/update"
            element={user ? <UpdateProducts /> : <Navigate to="/login" />}
          />

          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
