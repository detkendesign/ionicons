import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowDownLeftBox = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M180.364 480H48a16.002 16.002 0 01-16-16V331.636c0-8.836 7.163-16 16-16s16 7.164 16 16v93.737l51.128-51.128a58.521 58.521 0 0022.591 22.663L86.627 448h93.737c8.836 0 16 7.163 16 16s-7.164 16-16 16zm-42.645-83.092a58.543 58.543 0 0028.59 7.456h255.146A58.545 58.545 0 00480 345.818V90.545A58.543 58.543 0 00421.455 32H166.182a58.545 58.545 0 00-58.546 58.545v255.273c0 .808.06 1.602.176 2.378a58.544 58.544 0 007.316 26.049l169.558-169.559c6.249-6.248 16.379-6.248 22.628 0 6.248 6.249 6.248 16.379 0 22.628L137.719 396.908z"
          fillRule="evenodd"
        />
      </svg>
    );
  },
);

ArrowDownLeftBox.displayName = "ArrowDownLeftBox";