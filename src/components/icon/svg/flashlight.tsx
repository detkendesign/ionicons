import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Flashlight = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M462 216c9.35-9.35 15.14-19.09 17.19-28.95 2.7-12.95-1.29-25.55-11.22-35.48L360.43 44.05C346.29 29.92 322 24.07 296 50l-2 2a8 8 0 000 11.32L448.64 218a8 8 0 0011.36 0zM250.14 153.08l-.16 2.34c-.53 7.18-6.88 19.15-13.88 26.14L47.27 370.36c-11.12 11.11-16.46 25.57-15.05 40.7C33.49 424.58 40.16 438 51 448.83L63.17 461c12.61 12.6 27.78 19 42.49 19a50.4 50.4 0 0036-15.24l188.84-188.8c7.07-7.07 18.84-13.3 26.17-13.87 17.48-1.32 43.57-3.28 67.79-15.65a4 4 0 001-6.37L271.69 86.31a4 4 0 00-6.39 1c-12.12 22.99-13.82 46.91-15.16 65.77zm-9.95 146.83a20 20 0 110-25.25 20 20 0 010 25.25z" />
      </svg>
    );
  },
);

Flashlight.displayName = "Flashlight";
