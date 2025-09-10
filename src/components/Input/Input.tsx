import { type FC, type InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    required?: boolean
    className?: string
}

const Input: FC<InputProps> = ({ label, required = false, className = "", ...props }) => {
    return (
        <div className={`w-[384px] h-[50px] flex flex-col ${className}`}>
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
        </div>
    )
}

export default Input
