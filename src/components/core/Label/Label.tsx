import { type FC, type HTMLAttributes } from 'react';

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
    type?: 'success' | 'error'; // can add more types later
    className?: string;
}

const Label: FC<LabelProps> = ({ text, type = 'success', className = '', ...props }) => {
    const typeClasses = type === 'success' ? 'bg-green-light text-green' : 'bg-red-light text-red';

    return (
        <div
            {...props}
            className={`
                rounded-full
                px-4
                py-2
                flex
                items-center
                justify-center
                gap-2
                opacity-100
                text-sm
                font-medium
                bold
                ${typeClasses}
                ${className}
            `}
        >
            {text}
        </div>
    );
};

export default Label;
