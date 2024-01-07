/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "project-deployTest",

  // 해당 주소들만 out 폴더에 생성해 줌
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/board": { page: "/board" },
      "/404": { page: "/404" },
    };
  },
};

module.exports = nextConfig;
