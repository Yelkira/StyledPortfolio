import * as React from "react"
import { SVGProps, memo } from "react"
const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M5.8 7.9H2.5v10.5h3.3V7.9ZM4.1 3c-1.2 0-2 .7-2 1.8 0 1 .8 1.8 2 1.8s2-.8 2-1.8-.8-1.9-2-1.9Zm10.6 4.8c-1.8 0-3 1-3.2 1.7V8H7.8v10.5h3.7v-6.7c.3-.6.9-1.2 1.8-1.2 1.3 0 1.9 1 1.9 2.3v5.5h3.7v-5.9c0-3.2-1.8-4.7-4.2-4.7Z"
        />
    </svg>
)
export const LinkedInIcon = memo(LinkedIn)
