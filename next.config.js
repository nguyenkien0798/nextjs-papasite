/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path');
const bundleAnalyzer = require('@next/bundle-analyzer');

const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: false,
  i18n,
  output: 'standalone',
  images: {
    domains: ['cms-v2.papagroup.net'],
  },
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, './src');
    return config;
  },
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH,
  },
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
