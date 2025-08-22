/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["i.postimg.cc", "res.cloudinary.com"], // allow postimg.cc
    },
};

export default nextConfig;
