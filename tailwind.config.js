/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      spacing: {
        xs: '10px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px'
      }
    }
  },
  plugins: []
}
