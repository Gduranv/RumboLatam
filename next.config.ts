import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 exige declarar las calidades permitidas. El proyecto no usa el
    // prop `quality` en ninguna parte, asi que basta la de por defecto.
    qualities: [75],
  },
};

export default nextConfig;
