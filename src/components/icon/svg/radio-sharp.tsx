import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const RadioSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <ellipse cx="256" cy="256" rx="36" ry="35.99" />
        <path d="M188.4 350.8l-14.62-16.44a117.91 117.91 0 010-156.71l14.62-16.43 32.87 29.24-14.62 16.43a73.93 73.93 0 000 98.25l14.62 16.44zM323.6 350.8l-32.89-29.22 14.62-16.44a73.93 73.93 0 000-98.25l-14.62-16.43 32.87-29.24 14.62 16.43a117.91 117.91 0 010 156.71z" />
        <path d="M138.24 401.76l-15-16.06a189.85 189.85 0 010-259.4l15-16.07 32.14 30.05-15 16.06a145.88 145.88 0 000 199.32l15 16.06zM373.76 401.76l-32.14-30 15-16.06a145.88 145.88 0 000-199.32l-15-16.06 32.14-30 15 16.07a189.85 189.85 0 010 259.4z" />
        <path d="M430.73 447l-32.79-29.33 14.66-16.39a218.2 218.2 0 000-290.56l-14.67-16.38L430.72 65l14.67 16.39a262.18 262.18 0 010 349.22zM81.27 447L66.6 430.61a262.18 262.18 0 010-349.22L81.28 65l32.79 29.34-14.68 16.38a218.2 218.2 0 000 290.56l14.66 16.39z" />
      </svg>
    );
  },
);

RadioSharp.displayName = "RadioSharp";