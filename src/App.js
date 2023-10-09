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
import { useEffect } from "react";

function App() {
  const { user } = useAuthContext();
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       autoDisplay: false,
  //     },
  //     "google_translate_element"
  //   );
  // };
  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);
  return (
    <div className="App">
      {/* <div id="google_translate_element"></div> */}
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
          <Route
            path="/add"
            element={
              <h2>
                KONG Puppy toy is customized for a growing puppy’s baby teeth,
                the unique, natural rubber formula is the most gentle within the
                KONG rubber toy line. Designed to meet the needs of a puppy’s
                28-baby teeth, it helps teach appropriate chewing behavior while
                offering enrichment and satisfying a younger pup’s instinctual
                needs. Meanwhile, the erratic bounces make it ideal for those
                pups that just want to play. A stuffed Puppy KONG occupies busy
                little ones while allowing pet parents the freedom to attend to
                their unique needs. Want to make crate training easier or extend
                play time? Be sure to stuff with puppy kibble and a dash of
                peanut butter. Add to the fun by including KONG Puppy Snacks and
                top with KONG Puppy Easy Treat.
              </h2>
            }
          />
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
