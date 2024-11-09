import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ListSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M144 144h320M144 256h320M144 368h320"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="48"
        />
        <path
          d="M64 128h32v32H64zM64 240h32v32H64zM64 352h32v32H64z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

ListSharp.displayName = "ListSharp";
