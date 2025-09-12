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
  `;

    const variantClasses =
        variant === 'primary'
            ? 'bg-orange-500 text-white hover:bg-orange-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

    return (
        <NavLink to={to} {...props} className={`${baseClasses} ${variantClasses} ${className}`}>
            {label}
        </NavLink>
    );
};

export default NavLinkButton;
