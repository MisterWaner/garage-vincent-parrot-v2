import PublicLayout from "./Layouts/PublicLayout";
import Home from "./pages/public/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mecanique from "./pages/public/Mecanique";
import Carrosserie from "./pages/public/Carrosserie";
import Cars from "./pages/public/Cars";
import Contact from "./pages/public/Contact";
import Rgpd from "./pages/public/Rgpd";
import Connexion from "./pages/public/Connexion";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/mecanique", element: <Mecanique /> },
            { path: "/carrosserie", element: <Carrosserie /> },
            { path: "/occasions", element: <Cars /> },
            { path: "/contact", element: <Contact /> },
            { path: "/rgpd", element: <Rgpd /> },
            { path: "/connexion", element: <Connexion /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
