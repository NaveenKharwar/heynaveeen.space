// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://www.heynaveeen.space",
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [astroIcon({
        include: {
            "simple-icons": ["*"],
        },
		}), sitemap()],
});