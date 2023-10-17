import "./App.css";
import AddProducts from "./pages/AddProducts";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import UpdateProducts from "./pages/UpdateProducts";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./utils/ProtectedRoute";
import NotProtectedRoute from "./utils/NotProtectedRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div id="google_translate_element"></div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<ProtectedRoute component={Products} />}
          />
          <Route
            path="/add"
            element={<ProtectedRoute component={AddProducts} />}
          />
          <Route
            path="/update"
            element={<ProtectedRoute component={UpdateProducts} />}
          />

          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route
            path="/signup"
            element={<NotProtectedRoute component={SignUp} />}
          />
          <Route
            path="/login"
            element={<NotProtectedRoute component={Login} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
