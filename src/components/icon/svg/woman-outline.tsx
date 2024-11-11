import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const WomanOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
  ({ width, size, height, ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? size}
        height={height ?? size}
        ref={ref}
        {...props}
      >
        <path
          d="M208 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M256 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V368M183 274a23.73 23.73 0 01-29.84 16.18h0a23.72 23.72 0 01-16.17-29.84l25-84.28A44.85 44.85 0 01205 144h102a44.85 44.85 0 0143 32.08l25 84.28a23.72 23.72 0 01-16.17 29.84h0a23.73 23.73 0 01-29.78-16.2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M208 192l-48 160h192l-48-160"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="256"
          cy="56"
          fill="none"
          r="40"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

WomanOutline.displayName = "WomanOutline";
