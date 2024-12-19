import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@App": "/src/@App",
      "@/interfaces": "/src/interfaces",
      "@/components": "/src/components",
      "@/feature": "/src/feature",
      "@/store": "/src/store",
      "@/apis": "/src/apis",
      "@/hooks": "/src/hooks",
      "@/assets": "/src/assets",
      "@/context": "/src/context",
      "@/schemas": "/src/schemas",
    },
  },
});
