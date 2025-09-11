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
    { to: '/create', label: 'Create' },
];

const NavBar = () => {
    return (
        <nav className="w-full bg-[#2C2C2C] h-[54px] flex items-center px-8 ">
            <img src={Logo} className="h-[16px] w-[151px]"></img>
            {navigationLinks.map((link, index) => (
                <MenuItem key={`MenuItem-${index}`} to={link.to} label={link.label} />
            ))}
        </nav>
    );
};

export default NavBar;
