import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const FootstepsOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M200 246.84c8.81 58.62-7.33 90.67-52.91 97.41-50.65 7.49-71.52-26.44-80.33-85.06-11.85-78.88 16-127.94 55.71-131.1 36.14-2.87 68.71 60.14 77.53 118.75zM223.65 409.53c3.13 33.28-14.86 64.34-42 69.66-27.4 5.36-58.71-16.37-65.09-49.19s17.75-34.56 47.32-40.21 55.99-20.4 59.77 19.74zM312 150.83c-8.81 58.62 7.33 90.67 52.9 97.41 50.66 7.49 71.52-26.44 80.33-85.06 11.86-78.89-16-128.22-55.7-131.1-36.4-2.64-68.71 60.13-77.53 118.75zM288.35 313.53c-3.13 33.27 14.86 64.34 42 69.66 27.4 5.36 58.71-16.37 65.09-49.19s-17.75-34.56-47.32-40.22-55.99-20.4-59.77 19.75z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

FootstepsOutline.displayName = "FootstepsOutline";
