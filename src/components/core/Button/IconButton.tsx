import type { FC, ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

const IconButton: FC<IconButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button
            {...props}
            className={`
                w-8
                h-8
                rounded-md
                flex
                items-center
                justify-center
                opacity-100
                transition
                duration-200
                focus:outline-none
                hover:cursor-pointer
                ${className}
              `}
        >
            {children}
        </button>
    );
};

export default IconButton;
