import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tirolesamiradordelsol.com",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en",
          it: "it",
          zh: "zh-CN",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
