import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const MaleSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M330 48v44h58.89l-60.39 60.39c-68.2-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 00246 0c62.57-62.58 67.43-161.34 14.57-229.54L420 123.11V182h44V48zm-16.08 333.92a130.13 130.13 0 01-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0 50.69 133.16 0 183.84z" />
      </svg>
    );
  },
);

MaleSharp.displayName = "MaleSharp";
