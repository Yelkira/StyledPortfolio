import {SVGProps} from "react"

export const HtmlIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        fill="currentColor"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="m18 42 9-35 4 1-9 35-4-1Zm-4-29 3 3-9 9 9 9-3 3L2 25l12-12Zm22 0-3 3 9 9-9 9 3 3 12-12-12-12Z"
            clipRule="evenodd"
        />
    </svg>
)
