import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        50: "#f3f3fa",
        100: "#ebe9f6",
        200: "#dbd8ed",
        300: "#c7c0e1",
        400: "#b0a5d4",
        500: "#a08ec6",
        600: "#8f77b4",
        700: "#7d659d",
        800: "#665380",
        900: "#554768",
        950: "#2d2637",
      },
      fontFamily: {
        sans: "instrument-sans",
        mono: "space-mono",
      }
    }
  },

  plugins: [flowbitePlugin]
} satisfies Config;
