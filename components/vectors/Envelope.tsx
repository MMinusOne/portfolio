import { SVGProps } from "react";

export default function Envelope(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_43_6)">
        <path
          d="M4.25 5C2.17969 5 0.5 6.67969 0.5 8.75C0.5 9.92969 1.05469 11.0391 2 11.75L19 24.5C19.8906 25.1641 21.1094 25.1641 22 24.5L39 11.75C39.9453 11.0391 40.5 9.92969 40.5 8.75C40.5 6.67969 38.8203 5 36.75 5H4.25ZM0.5 13.75V30C0.5 32.7578 2.74219 35 5.5 35H35.5C38.2578 35 40.5 32.7578 40.5 30V13.75L23.5 26.5C21.7188 27.8359 19.2812 27.8359 17.5 26.5L0.5 13.75Z"
          fill="#E2E8F0"
          fill-opacity="0.7"
        />
      </g>
      <defs>
        <clipPath id="clip0_43_6">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
