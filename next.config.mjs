const isProd = process.env.NODE_ENV === "production";

// username.github.io so no 
const repoName = "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  ...(isProd && repoName
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

export default nextConfig;
