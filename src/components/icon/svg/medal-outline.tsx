import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const MedalOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <circle
          cx="256"
          cy="352"
          fill="none"
          r="112"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="256"
          cy="352"
          fill="none"
          r="48"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M147 323L41.84 159.32a32 32 0 01-1.7-31.61l31-62A32 32 0 0199.78 48h312.44a32 32 0 0128.62 17.69l31 62a32 32 0 01-1.7 31.61L365 323M371 144H37M428.74 52.6L305 250M140.55 144L207 250"
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

MedalOutline.displayName = "MedalOutline";
