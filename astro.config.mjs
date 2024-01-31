import { defineConfig } from "astro/config";

// TODO: change the site URL / get from env
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://alexbrufsky.com",
  output: "static",
  integrations: [
    tailwind({
      nesting: true,
      applyBaseStyles: false,
    }),
    sitemap(),
    react(),
    partytown({
      config: {
        resolveUrl: (url, location) => {
          const proxiedHosts = [
            "googletagmanager.com",
            "connect.facebook.net",
            "googleads.g.doubleclick.net",
          ];

          if (proxiedHosts.includes(url.hostname)) {
            const proxyUrl = new URL(location.origin);
            proxyUrl.searchParams.append("url", url.href);
            return proxyUrl;
          }

          return url;
        },
        forward: ["dataLayer.push", "fbq"],
      },
    }),
    compress(),
  ],
});
