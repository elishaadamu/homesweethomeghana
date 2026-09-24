import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Home Sweet Home Ghana Network",
    short_name: "HSH Network",
    description:
      "A vibrant global community uniting Ghanaians at home and in the diaspora through friendship, collaboration, cultural pride, and charitable service.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#002576",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
