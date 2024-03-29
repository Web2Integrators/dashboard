import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";

export default defineConfig((): UserConfig => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), qwikReact()],
    server: {
      headers: {
        "Cache-Control": "public, max-age=0",
      },
    },
    define: {
      "process.env": JSON.stringify(process.env),
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    optimizeDeps: {
      include: ["@auth/core"],
    },
  };
});
