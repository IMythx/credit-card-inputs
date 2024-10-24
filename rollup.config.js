import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts", // Entry point of your library
  output: {
    file: "dist/credit-card-inputs.umd.js", // Output file for UMD build
    format: "umd", // UMD format
    name: "CCI", // Global variable name in browser
    sourcemap: true, // Enable source maps for debugging
  },
  plugins: [
    nodeResolve(), // Resolve dependencies in node_modules
    commonjs(), // Convert CommonJS modules to ES6 if needed
    typescript(), // Compile TypeScript to JavaScript
    postcss({
      extract: true, // Extract CSS to a separate file
    }),

    // Copy static assets (images, fonts, etc.)
    copy({
      targets: [
        { src: "src/assets/*", dest: "dist/assets" }, // Copy all assets to dist/assets
      ],
    }),
  ],
};