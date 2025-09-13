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
            className={({ isActive }) =>
                [
                    'h-10 flex items-center px-2 py-4 rounded transition-colors duration-200',
                    'hover:bg-primary hover:text-gray-100',
                    isActive ? 'text-gray-100' : 'text-gray-500',
                    className,
                ].join(' ')
            }
        >
            {label}
        </NavLink>
    );
};

export default MenuItem;
