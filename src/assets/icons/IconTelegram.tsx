import { SVGProps, memo } from "react"
const Telegram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#1F1F20"
      d="m19 4.8-2.6 12c-.2.8-.7 1-1.4.6l-4-2.9-1.9 1.8c-.2.2-.3.4-.7.4l.2-4L16 6.4c.3-.3 0-.4-.5-.2l-8.8 5.6-3.8-1.2c-.9-.2-.9-.8.1-1.2l15-5.7c.6-.3 1.2.1 1 1.2Z"
    />
  </svg>
)
export const TelegramIcon = memo(Telegram)
