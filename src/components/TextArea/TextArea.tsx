import { type FC, type TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    required?: boolean;
    className?: string;
}

const TextArea: FC<TextareaProps> = ({ label, required = false, className = '', ...props }) => {
    return (
        <div className={`w-[384px] max-w-[384px] h-[121px] flex flex-col gap-2 ${className}`}>
            <label>
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
                {...props}
                className={`
          w-[384px]
          h-[103px]
          px-2
          py-2
          rounded
          border
          border-gray-300
          bg-white
          focus:outline-none
          resize-none
          m-0
        `}
            />
        </div>
    );
};

export default TextArea;
