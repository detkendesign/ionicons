import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const FileTrayStackedOutline = forwardRef<
  SVGSVGElement,
  DefaultIconProps
>(({ width, size, height, ...props }, ref) => {
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
        d="M48 336v96a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48v-96"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M48 336h144M320 336h144M192 336a64 64 0 00128 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M384 32H128c-26 0-43 14-48 40L48 192v96a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48v-96L432 72c-5-27-23-40-48-40z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M48 192h144M320 192h144M192 192a64 64 0 00128 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
});

FileTrayStackedOutline.displayName = "FileTrayStackedOutline";
