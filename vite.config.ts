import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  base: '/vite-solid-vanilla-extract-example/',
  plugins: [
      solidPlugin(),
      vanillaExtractPlugin()
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
