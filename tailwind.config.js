/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px'
    },
    extend: {
      spacing: {
        xs: '10px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px'
      },
      typography: {
        lg: {
          css: {
            [[
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'hr',
              'p',
              'ol',
              'ul',
              ':where(li):not(:where([class~="not-prose"] *))'
            ].join(',')]: {
              margin: 0
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
