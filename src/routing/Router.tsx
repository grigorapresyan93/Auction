import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/main/Main";
import MainLayout from "../pages/main/MainLayout";
import AuthenticationLayout from "../pages/authentication/AuthenticationLayout";
import SignIn from "../pages/authentication/signin/SignIn";
import Register from "../pages/authentication/register/Register";
import ProtectedRoute from "./protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <div>Page Not Found</div>,
    children: [{ index: true, element: <Main /> }]
  },
  {
    path: "/auth",
    element: <AuthenticationLayout />,
    errorElement: <div>Page Not Found</div>,
    children: [
      { index: true, element: <Register /> },
      { path: "sign-in", element: <SignIn /> }
    ]
  }
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
