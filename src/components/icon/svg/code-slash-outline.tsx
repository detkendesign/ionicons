import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CodeSlashOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
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

CodeSlashOutline.displayName = "CodeSlashOutline";