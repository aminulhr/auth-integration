import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import daisyui from "daisyui";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      plugins: [daisyui],
    }),
  ],
});
