import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Directory that contains this config (the real app root with node_modules). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Parent folder also has a package-lock.json; Next was treating that as the
  // workspace root and failed to resolve `tailwindcss` for PostCSS/Turbopack.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
