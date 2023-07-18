import { SVGProps, memo } from "react"
const Insta = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <path
            fill="#7572D5"
            d="M15.65 2.1H5.35A3.25 3.25 0 0 0 2.1 5.35v10.3c0 1.8 1.46 3.25 3.25 3.25h10.3c1.8 0 3.25-1.46 3.25-3.25V5.34a3.26 3.26 0 0 0-3.25-3.24Zm.93 1.94h.38v2.84h-2.84l-.01-2.84h2.47ZM8.1 8.77a2.95 2.95 0 0 1 5.35 1.73A2.95 2.95 0 1 1 8.1 8.77Zm9.16 6.88c0 .88-.72 1.6-1.6 1.6H5.34c-.89 0-1.6-.72-1.6-1.6V8.77h2.5a4.57 4.57 0 0 0 4.25 6.32 4.6 4.6 0 0 0 4.25-6.32h2.5v6.88Z"
        />
    </svg>
)
export const InstaIcon = memo(Insta)
