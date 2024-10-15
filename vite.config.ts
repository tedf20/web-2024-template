import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/web-2024-template/", // Add this line
  resolve: {
    alias: {
      'pdfjs-dist': 'pdfjs-dist/build/pdf',
    },
  },
});
