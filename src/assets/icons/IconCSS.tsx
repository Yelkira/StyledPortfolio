import {SVGProps} from "react"

export const CssIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        fill="none"
        {...props}
    >
        <path
            fill="#7572D5"
            d="M38 11H13v5h20l-1 5H20v5h12l-1 6-6 2-5-2v-4h-5v8l10 3 11-3 2-25ZM5 3h40l-3 40-17 5-16-5L5 3Z"
        />
    </svg>
)
