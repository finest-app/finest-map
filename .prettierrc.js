module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
  arrowParens: 'avoid',
  trailingComma: 'none',
  semi: false,
  bracketSameLine: true,
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'strict',
  singleQuote: true
}
