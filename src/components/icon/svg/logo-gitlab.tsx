import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LogoGitlab = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M488.028 207.68l-.674-1.731-65.335-171.154a17.07 17.07 0 00-6.723-8.129 17.445 17.445 0 00-19.995 1.08 17.568 17.568 0 00-5.799 8.83l-44.114 135.478H166.756L122.641 36.576a17.215 17.215 0 00-5.798-8.856 17.444 17.444 0 00-19.996-1.079 17.22 17.22 0 00-6.723 8.129l-65.46 171.078-.649 1.731a122.213 122.213 0 00-3.308 77.122c7.259 25.388 22.543 47.718 43.548 63.625l.225.175.6.427 99.526 74.814 49.238 37.407 29.993 22.73A20.118 20.118 0 00256.034 488c4.405 0 8.689-1.447 12.197-4.121l29.993-22.73 49.238-37.407 100.126-75.266.25-.2c20.958-15.91 36.207-38.217 43.454-63.57a122.26 122.26 0 00-3.264-77.026z" />
      </svg>
    );
  },
);

LogoGitlab.displayName = "LogoGitlab";