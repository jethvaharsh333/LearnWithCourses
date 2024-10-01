/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "utfs.io",
            "res.cloudinary.com",
        ],
        // loader: 'cloudinary',
        // path: 'res.cloudinary.com/dabitzf0t/image/upload/v1726482464/'

    }
};

export default nextConfig;
