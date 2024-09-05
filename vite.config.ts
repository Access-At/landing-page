import * as path from "path"

import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import webfontDownload from "vite-plugin-webfont-dl"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload(),
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString()
          }
        },
        // manualChunks: {
        //   react: ["react", "react-dom"],
        //   "react-router-dom": ["react-router-dom"],
        // },
      },
    },
  },
})
