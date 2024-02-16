import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    partytown({
      config: {
        // Allow proxying requests for Google domains
        resolveUrl: (url, location) => {
          const proxiedHosts = [
            "googletagmanager.com",
            "googleads.g.doubleclick.net",
          ];

          // Proxy any allowed hosts through the base domain
          if (proxiedHosts.includes(url.hostname)) {
            const proxyUrl = new URL(location.origin);
            proxyUrl.searchParams.append("url", url.href);
            return proxyUrl;
          }

          return url;
        },
        // Allow communication for Google Tag Manager
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
