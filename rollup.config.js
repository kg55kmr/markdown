import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import esbuild from "rollup-plugin-esbuild";

export default {
  input: "src/parser.js",
  output: { file: "src/parser.min.js", format: "esm" },
  plugins: [nodeResolve(), commonjs(), json(), esbuild({ minify: true })],
};
