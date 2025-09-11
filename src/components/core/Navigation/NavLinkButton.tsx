import { type FC } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

interface NavLinkButtonProps extends NavLinkProps {
    to: string;
    label: string;
    className?: string;
}

const NavLinkButton: FC<NavLinkButtonProps> = ({ to, label, className = '', ...props }) => {
    const baseClasses = `
    rounded-md
    font-semibold
    flex
    items-center
    justify-center
    gap-[10px]
    opacity-100
    px-1
    py-2
    transition
    duration-200
    focus:outline-none
    bg-orange-500
    text-white
    hover:bg-orange-700"
  `;

    return (
        <NavLink to={to} {...props} className={`${baseClasses} ${className}`}>
            {label}
        </NavLink>
    );
};

export default NavLinkButton;
