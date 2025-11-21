import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // assetsInclude: ['**/*.CR2'],
  assetsInclude: ['**/*.CR2', '**/*.NEF', '**/*.ARW', '**/*.DNG', '**/*.JPG', '**/*.JPEG'],


});
