import { type FC, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required?: boolean;
    error?: string
    className?: string;
}

const Input: FC<InputProps> = ({ label, required = true, error, className = '', ...props }) => {
    return (
        <div className={`w-[384px] h-[50px] flex flex-col ${className} mb-8`}>
            <label>
                {label} {required && <span>*</span>}
            </label>
            <input
                {...props}
                className={`
          w-[384px]
          h-[32px]
          p-2
          rounded
          border-[1px] border-[#B3B3B3]
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
