import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const MailUnreadOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M320 96H88a40 40 0 00-40 40v240a40 40 0 0040 40h334.73a40 40 0 0040-40V239"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M112 160l144 112 87-65.67"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path d="M432 192a63.95 63.95 0 1163.95-63.95A64 64 0 01432 192zm0-95.9a32 32 0 1031.95 32 32 32 0 00-31.95-32z" />
        <circle cx="431.95" cy="128.05" r="47.95" />
      </svg>
    );
  },
);

MailUnreadOutline.displayName = "MailUnreadOutline";
