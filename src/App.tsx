import { Outlet } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import { FacilitiesContextProvider } from './context/FacilityContext';

function App() {
    return (
        <FacilitiesContextProvider>
            <NavBar />
            <main className="w-full max-w-screen-xl mx-auto px-4">
                <Outlet />
            </main>
        </FacilitiesContextProvider>
    );
}

export default App;