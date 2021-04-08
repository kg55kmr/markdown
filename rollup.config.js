import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import esbuild from "rollup-plugin-esbuild";
import polyfills from "rollup-plugin-node-polyfills";

export default {
  input: "src/parser.js",
  output: { file: "src/parser.min.js", format: "esm" },
  plugins: [
    nodeResolve(),
    commonjs(),
    polyfills({ process: true }),
    json(),
    esbuild({ minify: false }),
  ],
};
