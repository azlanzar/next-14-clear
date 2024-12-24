/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img.freepik.com',
      'next/image',
      'mytaskbookbucket.s3.us-east-1.amazonaws.com',
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'gcstaging.s3.eu-north-1.amazonaws.com'
    ],
  },
};

module.exports = nextConfig;
