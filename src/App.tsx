import { Outlet } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';

function App() {
    return (
        <div>
            <NavBar />
            <main className="w-full max-w-[1200px] mx-auto px-4">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
