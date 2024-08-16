/// <reference types="vitest" />
import type { UserConfig } from "vite";

export default {
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.test.ts"],
    coverage: {
      include: ["src/**/*.ts", "!src/index.ts", "!src/**/types.ts"],
    },
  },
} satisfies UserConfig;
