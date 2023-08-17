import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@ts": path.resolve(__dirname, "./src/types"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/styles/colors.scss" as *;`,
      },
    },
  },
});
