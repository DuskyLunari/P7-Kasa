import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Flat } from "../pages/Flat";
import { About } from "../pages/About";
import { Error } from "../pages/Error";

const router = createBrowserRouter( [
    {
        path:"/",
        element: <Home />
    },
    {
        path:"/a-propos",
        element: <About />
    },
    {
        path:"/logement/:flatId",
        element: <Flat />
    },
    {
        path:"*",
        element: <Error />
    },
])

export default router;