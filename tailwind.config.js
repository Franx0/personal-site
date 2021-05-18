const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  future: {},
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        peoplewho: 'rgba(234, 234, 229, 1)',
        neverempty: 'rgba(87, 119, 164, 1)',
        informa: 'rgba(255, 255, 255, 1)',
        glownet: 'rgba(228, 8, 126, 1)',
        string_: 'rgba(255, 99, 99, 1)',
        dark: {
          gray: {
            primary: 'rgba(45, 55, 72, 1)',
            secondary: 'rgba(75, 85, 99, 1)',
            selected: 'rgba(75, 85, 99, 1)'
          },
          white: {
            primary: 'rgba(247, 250, 252, 1)',
            secondary: 'rgba(226, 232, 240, 1)',
            default: 'rgba(226, 232, 240, 1)'
          },
          blue: {
            accent: 'rgba(129, 230, 217, 1)',
            outstanding: 'rgba(129, 230, 217, 1)'
          },
        },
        light: {
          gray: {
            primary: 'rgba(45, 55, 72, 1)',
            secondary: 'rgba(74, 85, 104, 1)',
            default: 'rgba(74, 85, 104, 1)'
          },
          white: {
            primary: 'rgba(255, 255, 255, 1)',
            secondary: 'rgba(237, 242, 247, 1)',
            selected: 'rgba(255, 255, 255, 1)'
          },
          blue: {
            accent: 'rgba(30, 64, 175, 1)',
            outstanding: 'rgba(46, 104, 242, 0.5)'
          }
        }
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        outstanding: "var(--color-bg-outstanding)",
        cards: "var(--color-bg-cards)",
      },
      backgroundImage: {
        'landing-img': "url('/media.jpg')",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        accent: "var(--color-text-accent)",
        default: "var(--color-text-default)",
        selected: "var(--color-text-selected)",
      }
    },
  },
  variants: {},
  plugins: [],
}
