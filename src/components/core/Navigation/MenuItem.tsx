import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItemProps {
    to: string;
    label: string;
    className?: string;
}

const MenuItem: FC<MenuItemProps> = ({ to, label, className = '' }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `
            h-[38px]
            flex
            items-center
            px-2
            py-4
            rounded
            hover:bg-[#e6e6e6]
            hover:text-[#F3F3F3] 
            ${isActive ? 'text-[#F3F3F3}' : 'text-[#767676]'}
            ${className}
            `}
        >
            {label}
        </NavLink>
    );
};

export default MenuItem;
