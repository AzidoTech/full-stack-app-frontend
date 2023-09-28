import "./App.css";
import Nav from "./components/Nav";
import { useAuthContext } from "./hooks/useAuthContext";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <h1>Product Listing Component</h1>
              ) : (
                <h1>User not there</h1>
              )
            }
          />
          <Route path="/add" element={<h1>Add Product Component</h1>} />
          <Route path="/update" element={<h1>Update Component</h1>} />
          <Route path="/logout" element={<h1>LogoutComponent</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
