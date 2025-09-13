import { type FC, type TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    required?: boolean;
    error?: string;
    className?: string;
}

const TextArea: FC<TextareaProps> = ({
    label,
    required = true,
    error,
    className = '',
    ...props
}) => {
    return (
        <div className={`max-w-[384px] h-[121px] flex flex-col gap-2 ${className} mb-6`}>
            <label className='text-sm'>
                {label} {required && <span>*</span>}
            </label>
            <textarea
                {...props}
                className={`
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
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};

export default TextArea;
