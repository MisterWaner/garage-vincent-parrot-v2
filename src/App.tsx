import PublicLayout from "./Layouts/PublicLayout";
import Home from "./pages/public/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            { path: "/", element: <Home /> },
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
