import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowDownRightBoxOutline = forwardRef<
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
        d="M269.236 388.364H90.546A42.546 42.546 0 0148 345.818V90.545A42.545 42.545 0 0190.545 48h255.273a42.543 42.543 0 0142.546 42.546v178.69M331.636 464H464V331.636M216 216l248 248"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
});

ArrowDownRightBoxOutline.displayName = "ArrowDownRightBoxOutline";
