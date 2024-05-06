import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Baudy Training",
    short_name: "Baudy Training",
    description:
      "Mathys Baudy, coach sportif et diététicien-nutritionniste à Lyon",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/pwa-imgs/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa-imgs/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
