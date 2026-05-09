import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Note: alias `@/` was originally configured here but required @types/node.
// Removed in favor of relative imports throughout `src/` to keep the dep tree
// minimal. If `@/` is wanted later, add `@types/node` and reintroduce it.
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
    },
});
