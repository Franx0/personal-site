module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      colors: {
        dark: {
          grey: {
            primary: '#2d3748',
            secondary: '#4b5563',
          },
          white: {
            primary: '#f7fafc',
            secondary: '#e2e8f0',
          },
          blue: {
            accent: '#81e6d9'
          }
        },
        light: {
          grey: {
            primary: '#2d3748',
            secondary: '#4a5568',
          },
          white: {
            primary: '#ffffff',
            secondary: '#edf2f7',
          },
          blue: {
            accent: '#1e40af'
          }
        }
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      }
    },
  },
  variants: {},
  plugins: [],
}
