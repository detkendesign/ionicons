import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Scale = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M368 32H144A112.12 112.12 0 0032 144v224a112.12 112.12 0 00112 112h224a112.12 112.12 0 00112-112V144A112.12 112.12 0 00368 32zm36.21 178l-33.32 39.21A41.76 41.76 0 01339 264.05a42.32 42.32 0 01-22.29-6.38c-14.22-8.78-36.3-19.25-60.69-19.25s-46.47 10.47-60.69 19.25a41.86 41.86 0 01-54.2-8.46L107.79 210a50.48 50.48 0 014.49-70.27c27.84-25.35 75.37-55.57 143.72-55.57s115.88 30.22 143.72 55.57a50.48 50.48 0 014.49 70.27z" />
      </svg>
    );
  },
);

Scale.displayName = "Scale";
