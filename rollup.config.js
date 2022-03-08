import typescript from "@rollup/plugin-typescript";

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
    { format: "umd", file: 'lib/main.umd.js', name: 'tinyjsuse' },
  ],
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
  ],
};