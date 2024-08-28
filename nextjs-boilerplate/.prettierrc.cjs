module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['*.json', '*.yml'],
      options: {
        tabWidth: 4,
      },
    },
  ],
};
