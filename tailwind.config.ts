import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#877EFF",
        secondary: "#FFB620",
        gradient:
          "linear-gradient(180deg, #877EFF 0%, #685DFF 46%, #3121FF 100%)",
        dark: {
          "400": "#000000",
          "300": "#09090A",
          "200": "#101012",
          "100": "#1F1F22",
        },
        light: {
          "100": "#FFFFFF",
          "200": "#EFEFEF",
          "300": "#7878A3",
          "400": "#5C5C7B",
        },
      },
      colors: {
        primary: "#877EFF",
        secondary: "#FFB620",
        dark: {
          "500": "#191F23",
          "400": "#000000",
          "300": "#09090A",
          "200": "#101012",
          "100": "#1F1F22",
        },
        light: {
          "100": "#FFFFFF",
          "200": "#EFEFEF",
          "300": "#7878A3",
          "400": "#5C5C7B",
        },
        gradient:
          "linear-gradient(180deg, #877EFF 0%, #685DFF 46%, #3121FF 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
