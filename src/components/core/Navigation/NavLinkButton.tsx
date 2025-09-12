import { type FC } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

interface NavLinkButtonProps extends NavLinkProps {
    to: string;
    label: string;
    variant: string;
    className?: string;
}

const NavLinkButton: FC<NavLinkButtonProps> = ({
    to,
    label,
    variant,
    className = '',
    ...props
}) => {
    const baseClasses = `
    h-[32px]
    rounded-md
    font-semibold
    flex
    items-center
    justify-center
    opacity-100
    transition
    duration-200
    focus:outline-none
    px-4 
  `;

    const variantClasses =
        variant === 'primary'
            ? 'bg-primary text-white hover:bg-orange-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

    return (
        <NavLink to={to} {...props} className={`${baseClasses} ${variantClasses} ${className}`}>
            {label}
        </NavLink>
    );
};

export default NavLinkButton;
