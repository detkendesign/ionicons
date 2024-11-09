import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const WatchSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <rect height="240" width="240" rx="8" ry="8" x="136" y="136" />
        <path d="M384 96h-48V16H176v80h-48a32 32 0 00-32 32v256a32 32 0 0032 32h48v80h160v-80h48a32 32 0 0032-32V128a32 32 0 00-32-32zm8 272a24 24 0 01-24 24H144a24 24 0 01-24-24V144a24 24 0 0124-24h224a24 24 0 0124 24z" />
      </svg>
    );
  },
);

WatchSharp.displayName = "WatchSharp";
