import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // search: false,
  // contentDirBasePath: "/docs",
});

// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  reactStrictMode: false,
  eslint: {
    // ESLint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true,
  },
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
});
