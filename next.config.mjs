/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
      {
        source: "/dashboard/analisys",
        destination: "/dashboard/analisys/station",
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
