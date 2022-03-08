import typescript from "@rollup/plugin-typescript";
import json from 'rollup-plugin-json';

export default {
  input: "modules/index.ts",
  output: [
    {
      file: "lib/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "lib/bundle.esm.js",
      format: "es",
    },
    { format: "umd", file: 'lib/bundle.umd.js', name: 'tinyjsuse' },
  ],
  plugins: [
    json(),
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
  ],
};