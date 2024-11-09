import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowUpRightBoxOutline = forwardRef<
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
        d="M388.364 242.764v178.691A42.547 42.547 0 01345.818 464H90.546A42.544 42.544 0 0148 421.455V166.182a42.543 42.543 0 0142.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
});

ArrowUpRightBoxOutline.displayName = "ArrowUpRightBoxOutline";
