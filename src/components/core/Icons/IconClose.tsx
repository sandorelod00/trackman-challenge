type IconlyIconProps = {
    size?: number
}

const IconClose = ({ size = 32 }: IconlyIconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black"
        >
            <path
                d="M5 5L19 19M5 19L19 5"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

export default IconClose
