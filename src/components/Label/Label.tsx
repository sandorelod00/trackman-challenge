import { type FC, type HTMLAttributes } from 'react';

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
    type?: 'success' | 'error'; // can add more types later
    className?: string;
}

const Label: FC<LabelProps> = ({ text, type = 'success', className = '', ...props }) => {
    const typeClasses =
        type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';

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
                gap-[10px]
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
