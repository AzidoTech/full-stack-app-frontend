import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import SignUp from "../components/SignUp";
import AboutUs from "../components/AboutUs";
import LogIn from "../components/Login";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/about-us",
      element: (
        <div>
          <AboutUs></AboutUs>
        </div>
      ),
    },
    {
      path: "/signup",
      element: (
        <div>
          <SignUp></SignUp>
        </div>
      ),
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <div>User Home Page</div>,
        },
        {
          path: "/add",
          element: <div>Add product</div>,
        },
        {
          path: "/update",
          element: <div>update product</div>,
        },
        {
          path: "/logout",
          element: <div>Logout</div>,
        },
        {
          path: "/profile",
          element: <div>Profile</div>,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <div>Home Page</div>,
    },
    {
      path: "/login",
      element: (
        <div>
          <LogIn></LogIn>
        </div>
      ),
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
