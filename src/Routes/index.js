import { Navigate } from "react-router-dom";
import Layout from "../Components/Layout";
import { privateRoute } from "./PrivateRoute";
import { user } from "./utils";

const ProtectedRoute = ({ route, children }) => {
  if (user) {
    if (route.role === user.role) {
      return children;
    } else {
      return <Navigate to={"/notfound"} replace />;
    }
  } else {
    return <Navigate to={"/login"} replace />;
  }
};

export const getRoute = () => {
  const filteredRoute = [];

  privateRoute.map((route) => {
    return (route.element =
      ((<ProtectedRoute route={route}>{route.children}</ProtectedRoute>),
      filteredRoute.push(route)));
  });

  return {
    path: "/dashboard",
    element: <Layout />,
    children: filteredRoute,
  };
};
