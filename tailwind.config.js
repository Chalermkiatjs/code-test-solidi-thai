/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      success: {
        light: "#a3e635",
        DEFAULT: "#84cc16",
        dark: "#65a30d",
      },
      warning: {
        light: "#fbbf24",
        DEFAULT: "#f59e0b",
        dark: "#d97706",
      },
      error: {
        light: "#ef4444",
        DEFAULT: "#dc2626",
        dark: "#b91c1c",
      },
      info: {
        light: "#7dd3fc",
        DEFAULT: "#38bdf8",
        dark: "#0284c7",
      },
      default: {
        light: "#60a5fa",
        DEFAULT: "#3b82f6",
        dark: "#2563eb",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      slate: {
        ...colors.slate,
        light: "#e2e8f0",
        DEFAULT: "#1e293b",
        dark: "#020617",
        
      },
    },
    extend: {},
  },
  plugins: [],
};
