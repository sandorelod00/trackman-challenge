import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import FacilityFormPage from './pages/FacilityFormPage';
import FacilityListPage from './pages/FacilityListPage';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App />}>
                    <Route index element={<FacilityListPage />} />
                    <Route path="create" element={<FacilityFormPage />} />
                    <Route path="edit/:id" element={<FacilityFormPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
