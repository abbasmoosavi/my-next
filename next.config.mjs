const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'news-cdn.varzesh3.com'
            }
        ]
    },
    output: 'standalone'
};

export default nextConfig;