import type { FC } from "react"
import { NavLink } from "react-router-dom"

interface MenuItemProps {
    to: string
    label: string
    className?: string
}

const MenuItem: FC<MenuItemProps> = ({ to, label, className = "" }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                [
                    "h-[38px] flex items-center px-2 py-4 rounded transition-colors duration-200",
                    "hover:bg-primary hover:text-[#F3F3F3]",
                    isActive
                        ? "text-[#F3F3F3]"
                        : "text-[#767676]",
                    className,
                ].join(" ")
            }
        >
            {label}
        </NavLink>
    )
}

export default MenuItem
