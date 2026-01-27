import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage.tsx";
import DashboardPage from "../pages/common/DashboardPage.tsx";
import ProductPage from "../pages/common/ProductPage.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
    },
    {
        path: "/products",
        element: <ProductPage />,
    },
    // {
    //     path: "/clients",
    //     element: <ClientsPage />,
    // },
    // {
    //     path: "/orders",
    //     element: <OrdersPage />,
    // },
    // {
    //     path: "/stock-movements",
    //     element: <StockMovementsPage />,
    // },
]);
