import Error from "../Components/Error";
import Home from "../Components/Home";
import NotFound from "../Components/NotFound";

export const publicRoute = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Error />,
  },
];
