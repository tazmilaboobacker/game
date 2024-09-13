import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import StaticPage from './pages/StaticPage';
import App from './App';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <StaticPage/>},
            {
                path: "/portfolio",
                element: <Portfolio/>},
            {
                path: "/about",
                element: <About/>},
            {
                path: "/home",
                element: <HomePage/>},
        ]
    }
])
const Router = () => <RouterProvider router={router} />

export default Router;