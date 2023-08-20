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
      "@components": path.resolve(__dirname, "./src/components"),
      "@ts": path.resolve(__dirname, "./src/types"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@api": path.resolve(__dirname, "./src/api"),
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
