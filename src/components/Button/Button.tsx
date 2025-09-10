import { type FC, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button: FC<ButtonProps> = ({ label, variant = 'primary', className = '', ...props }) => {
    const baseClasses = `
        rounded-md
        font-semibold
        flex
        items-center
        justify-center
        gap-[10px]
        opacity-100
        px-[24px]
        py-[8px]
        transition
        duration-200
        focus:outline-none
    `;

    const variantClasses =
        variant === 'primary'
            ? 'bg-orange-500 text-white hover:bg-orange-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

    return (
        <button {...props} className={`${baseClasses} ${variantClasses} ${className}`}>
            {label}
        </button>
    );
};

export default Button;
