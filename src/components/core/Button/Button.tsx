import { type FC, type ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    variant?: "primary" | "secondary"
    className?: string
}

const Button: FC<ButtonProps> = ({ label, variant = "primary", className = "", ...props }) => {
    const baseClasses = `
    h-[32px]
    rounded-md
    font-semibold
    flex
    items-center
    justify-center
    opacity-100
    transition
    duration-200
    focus:outline-none
    px-4 
  `

    const variantClasses =
        variant === "primary"
            ? "bg-primary text-white hover:bg-orange-700"
            : "bg-secondary text-gray-800 hover:bg-gray-300"

    return (
        <button {...props} className={`${baseClasses} ${variantClasses} ${className}`}>
            {label}
        </button>
    )
}

export default Button
