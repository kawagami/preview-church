import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

export const basename = import.meta.env.BASE_URL || '/';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            errorElement: <NotFound />,
            children: [
                { path: '', element: <Home /> },
                { path: 'about', element: <About /> },
                { path: '*', element: <NotFound /> },
            ],
        },
    ],
    { basename }
);

export default router;
