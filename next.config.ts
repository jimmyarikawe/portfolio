import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// All images are self-hosted under /public/images — no remote patterns needed.
const nextConfig: NextConfig = {};

/*
 * Makes Cloudflare bindings (the IMAGES binding, in this project's case)
 * available during `next dev`, so local development matches the deployed
 * runtime instead of only failing once it reaches Workers.
 */
initOpenNextCloudflareForDev();

export default nextConfig;
