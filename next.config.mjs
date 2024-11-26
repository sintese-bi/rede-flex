import { format } from "date-fns";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    TZ: "America/Sao_Paulo",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },

      {
        source: "/dashboard/alerts",
        destination: "/dashboard/alerts/station",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
