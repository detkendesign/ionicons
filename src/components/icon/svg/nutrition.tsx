import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Nutrition = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M439 166.29c-18.67-32.57-47.46-50.81-85.57-54.23-20.18-1.8-39 3.37-57.23 8.38-14.15 3.89-27.52 7.56-40.2 7.56s-26-3.68-40.06-7.57c-18.28-5-37.18-10.26-57.43-8.36-36.39 3.41-65.51 22.11-84.31 54.08C56.82 195.76 48 236.76 48 288c0 40.4 15 90.49 40 134 12.82 22.25 47 74 87.16 74 30.77 0 47.15-9.44 59.11-16.33 8.3-4.78 13.31-7.67 21.69-7.67s13.39 2.89 21.69 7.67c12 6.89 28.35 16.33 59.15 16.33 40.17 0 74.34-51.76 87.16-74 25.07-43.5 40-93.59 40-134 .04-52.57-8.14-92.38-24.96-121.71zM216 352c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48zm80 0c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48z" />
        <path d="M265.1 111.93c13.16-1.75 37.86-7.83 58.83-28.79a98 98 0 0028-58.2 8 8 0 00-8.55-8.94c-12.71.95-36.76 5.87-58.73 27.85A97.6 97.6 0 00256 103.2a8 8 0 009.1 8.73z" />
      </svg>
    );
  },
);

Nutrition.displayName = "Nutrition";
