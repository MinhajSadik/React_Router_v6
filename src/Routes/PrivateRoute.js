import { Navigate } from "react-router-dom";
import AdminPage from "../Components/AdminPage";
import Manager from "../Components/Manager";
import Payment from "../Components/Payment";
import Seller from "../Components/Seller";
import Worker from "../Components/Worker";

export const privateRoute = [
  {
    path: "/dashboard",
    element: <Navigate replace to={() => {}} />,
    role: "all",
  },
  {
    path: "worker",
    element: <Worker />,
    role: "worker",
  },
  {
    path: "manager",
    element: <Manager />,
    role: "manager",
  },
  {
    path: "seller",
    element: <Seller />,
    role: "seller",
  },
  {
    path: "payment",
    element: <Payment />,
    role: "admin",
  },
  {
    path: "admin",
    element: <AdminPage />,
    role: "admin",
  },
];
