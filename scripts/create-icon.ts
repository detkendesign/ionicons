import path from "path";
import fs from "fs";
import svgToJsx from "svg-to-jsx";
import ionicons from "ionicons/dist/ionicons.web-types.json" assert { type: "json" };
import { fileURLToPath } from "url";
import prettier from "prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconList = ionicons.contributions.html.ionicons;

const rootDir = path.join(__dirname, "..");

const dir = path.join(rootDir, "src/icons");

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const upperCamelCase = (...args: string[]) => {
  return args
    .join(" ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

const createElement = async (name: string, node: unknown) => {
  const ComponentName = upperCamelCase(name);

  const jsxString = await svgToJsx(node as string);

  const updatedJsxString = jsxString.replace(
    /<svg([^>]*)>/,
    `<svg$1 {...props} ref={ref}>`,
  );

  const element = `import React, { forwardRef, type SVGAttributes } from "react";

const ${ComponentName} = forwardRef<SVGSVGElement, SVGAttributes<SVGElement>>(
  (props, ref) => {
    return (
      ${updatedJsxString}
    );
  }
);

${ComponentName}.displayName = "${ComponentName}";

export default ${ComponentName};`;

  const formattedElement = await prettier.format(element, {
    parser: "typescript",
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    printWidth: 80,
    trailingComma: "all",
  });

  return formattedElement;
};

iconList.slice(0, 3).forEach(async (icon) => {
  const location = path.join(rootDir, "src/icons", `${icon.name}.tsx`);

  const node = fs.readFileSync(`${rootDir}/node_modules/ionicons/${icon.icon}`);

  const element = await createElement(icon.name, node);

  fs.writeFileSync(location, element, "utf-8");
});
