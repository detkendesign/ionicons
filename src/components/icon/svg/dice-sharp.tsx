import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const DiceSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M48 366.92L240 480V284L48 170zM192 288c8.84 0 16 10.75 16 24s-7.16 24-16 24-16-10.75-16-24 7.16-24 16-24zm-96 32c8.84 0 16 10.75 16 24s-7.16 24-16 24-16-10.75-16-24 7.16-24 16-24zM272 284v196l192-113.08V170zm48 140c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm32 77.64zM256 32L64 144l192 112 192-112zm0 120c-13.25 0-24-7.16-24-16s10.75-16 24-16 24 7.16 24 16-10.75 16-24 16z" />
      </svg>
    );
  },
);

DiceSharp.displayName = "DiceSharp";