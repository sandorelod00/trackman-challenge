import { type FC, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required?: boolean;
    error?: string;
    className?: string;
}

const Input: FC<InputProps> = ({ label, required = true, error, className = '', ...props }) => {
    return (
        <div className={`max-w-md h-12 flex flex-col ${className} mb-6`}>
            <label className="text-sm">
                {label} {required && <span>*</span>}
            </label>
            <input
                {...props}
                className={`
          h-8
          p-2
          rounded
          border border-gray-400
          bg-white
          focus:outline-none
          m-0
        `}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};

export default Input;
