import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    //TODO: Add your own domain
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                port: '',
                pathname: '/photo/**',
                search: '',
            },
        ],
    },
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
