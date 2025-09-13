import MenuItem from '../core/Navigation/MenuItem';
import Logo from '/logo.png';

interface NavigationLinks {
    to: string;
    label: string;
}

const navigationLinks: NavigationLinks[] = [
    { to: '/', label: 'Facilites' },
    { to: '/locations', label: 'Locations' },
    { to: '/players', label: 'Players' },
    { to: '/accessManagement', label: 'Access Management' },
];

const NavBar = () => {
    return (
        <nav className="w-full bg-gray-900 h-16 mb-6">
            <div className="max-w-screen-xl mx-auto h-full flex items-center gap-6 px-4">
                <img src={Logo} className="h-4 w-36"></img>
                {navigationLinks.map((link, index) => (
                    <MenuItem key={`MenuItem-${index}`} to={link.to} label={link.label} />
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
