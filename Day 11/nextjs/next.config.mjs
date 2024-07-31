const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apollo.olx.co.id",
        port: "",
        pathname: "/v1/files/**",
      },
    ],
  },
};

export default nextConfig;
