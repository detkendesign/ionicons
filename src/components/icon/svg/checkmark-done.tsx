import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CheckmarkDone = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

CheckmarkDone.displayName = "CheckmarkDone";
