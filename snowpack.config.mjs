/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' }
    },
    alias: {
        '@app': './src',
        '@public': './public',
        '@components': './src/components',
        '@theme': './src/theme',
        '@utils': './src/utils',
        '@pages': './src/pages',
        '@routes': './src/routes',
        '@testData': './testData'
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        [
            '@snowpack/plugin-typescript',
            {
                /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
                ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {})
            }
        ]
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        { match: 'routes', src: '.*', dest: '/index.html' }
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        types: true
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        baseUrl: 'http://localhost:8080/'
    }
};
