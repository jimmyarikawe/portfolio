import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * Every route on this site is static or SSG — there is no ISR, no route
 * handler, no middleware and no server action. So the incremental cache is left
 * at its default rather than backed by R2: the previous CI-generated config
 * provisioned an R2 bucket and populated 26 cache entries on every build for a
 * site that never revalidates anything.
 */
export default defineCloudflareConfig();
