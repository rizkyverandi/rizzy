/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ["defaults", "not IE 11"],
    },
  },
};

export default config;
