import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={15}
        fill="none"
        {...props}
    >
        <path fill="currentColor" d="M7 4v11h2V4l5 5 2-1-8-8-8 8 2 1 5-5Z" />
    </svg>
)
export const ArrowTop = memo(SvgComponent)

