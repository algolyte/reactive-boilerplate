import dotenv from "dotenv";
import { resolve } from "path";
import checker from "vite-plugin-checker";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on the mode
  const env = loadEnv(mode, process.cwd());
  dotenv.config({ path: resolve(process.cwd(), `.env.${mode}`) });

  return {
    server: {
      port: 3000,
    },

    plugins: [react(), checker({ typescript: true })],

    define: {
      "process.env": env,
    },

    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  };
});
