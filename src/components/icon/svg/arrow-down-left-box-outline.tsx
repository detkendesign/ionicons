import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowDownLeftBoxOutline = forwardRef<
  SVGSVGElement,
  DefaultIconProps
>(({ width, size, height, ...props }, ref) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size}
      height={height ?? size}
      ref={ref}
      {...props}
    >
      <path
        d="M123.636 269.236V90.546A42.545 42.545 0 01166.182 48h255.273A42.546 42.546 0 01464 90.545v255.273a42.542 42.542 0 01-42.545 42.546H242.764M48 331.636V464h132.364M296 216L48 464"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
});

ArrowDownLeftBoxOutline.displayName = "ArrowDownLeftBoxOutline";
