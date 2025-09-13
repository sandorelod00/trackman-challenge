import { type FC, type InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    description?: string;
    className?: string;
}

const Checkbox: FC<CheckboxProps> = ({ label, description, className = '', ...props }) => {
    return (
        <label
            className={`
        min-w-[127px] h-[58px] flex gap-2
        p-2
        cursor-pointer
        mb-6
        ${className}
      `}
        >
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    {...props}
                    className="
                        w-5 h-5
                        rounded
                        border border-gray-400
                        accent-primary
                        "
                />
            </div>
            <div className="flex flex-col leading-tight">
                <span className="font-medium text-black">{label}</span>
                {description && <span className="text-gray-400 text-sm">{description}</span>}
            </div>
        </label>
    );
};

export default Checkbox;
