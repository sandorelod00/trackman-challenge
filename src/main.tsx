import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import FacilityFormPage from './pages/FacilityFormPage';
import FacilityListPage from './pages/FacilityListPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <FacilityListPage /> },
            { path: '/create', element: <FacilityFormPage /> },
            { path: '/edit/:id', element: <FacilityFormPage /> },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
