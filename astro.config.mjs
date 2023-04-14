import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ameneses67.github.io",
  base: "/lista-compras",
  integrations: [tailwind()],
});
