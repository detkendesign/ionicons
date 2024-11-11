import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PawSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M442.8 361.82c-8.8-25.1-29.31-37.82-49.11-50.12-17.23-10.71-33.5-20.83-44.14-39-29.33-50.33-45.44-80.7-93.49-80.7s-64.21 30.38-93.61 80.69c-10.65 18.21-27 28.35-44.25 39.08-19.8 12.31-40.27 25-49.1 50.05a78.06 78.06 0 00-5.1 28.29C64 430.85 96.45 464 132.4 464s83.31-18.13 123.76-18.13S343.31 464 379.71 464 448 430.85 448 390.11a78.3 78.3 0 00-5.2-28.29z" />
        <ellipse cx="72" cy="216" rx="56" ry="72" />
        <ellipse cx="184" cy="120" rx="56" ry="72" />
        <ellipse cx="328" cy="120" rx="56" ry="72" />
        <ellipse cx="440" cy="216" rx="56" ry="72" />
      </svg>
    );
  },
);

PawSharp.displayName = "PawSharp";