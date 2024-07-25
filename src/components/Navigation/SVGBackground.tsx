import { SVGProps } from "react";

const SVGBackground = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={18}
    viewBox="0 0 40 18"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_4936_39170)">
      <path
        d="M8 10C8 9.44772 8.44772 9 9 9H31C31.5523 9 32 9.44772 32 10C32 10.5523 31.5523 11 31 11H9C8.44772 11 8 10.5523 8 10Z"
        fill="#00C3D8"
      />
      <path
        d="M9 8.6C8.2268 8.6 7.6 9.2268 7.6 10C7.6 10.7732 8.2268 11.4 9 11.4H31C31.7732 11.4 32.4 10.7732 32.4 10C32.4 9.2268 31.7732 8.6 31 8.6H9Z"
        stroke="#0F101D"
        strokeWidth={0.8}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_4936_39170"
        x={0.200195}
        y={0.199951}
        width={39.5996}
        height={17.6001}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-1} />
        <feGaussianBlur stdDeviation={3.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4936_39170"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4936_39170"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SVGBackground;
