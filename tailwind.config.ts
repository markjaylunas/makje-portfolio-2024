import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          extend: "dark",
          colors: {
            background: "#000000",
            foreground: "#FAFAFA",
            primary: {
              "50": "#f1f4fd",
              "100": "#dfe7fa",
              "200": "#c5d5f8",
              "300": "#9ebbf2",
              "400": "#7097ea",
              "500": "#4169e1",
              "600": "#3957d7",
              "700": "#3044c5",
              "800": "#2d39a0",
              "900": "#29347f",
              DEFAULT: "#3957d7",
              foreground: "#ffffff",
            },
            secondary: {
              "50": "#f6f6f6",
              "100": "#e7e7e7",
              "200": "#d1d1d1",
              "300": "#b0b0b0",
              "400": "#888888",
              "500": "#6d6d6d",
              "600": "#5d5d5d",
              "700": "#4f4f4f",
              "800": "#454545",
              "900": "#3d3d3d",
              DEFAULT: "#5d5d5d",
              foreground: "#ffffff",
            },
            focus: "#2d39a0",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        light: {
          extend: "light",
          colors: {
            background: "#ffffff",
            foreground: "#000000",
            primary: {
              "50": "#f1f4fd",
              "100": "#dfe7fa",
              "200": "#c5d5f8",
              "300": "#9ebbf2",
              "400": "#7097ea",
              "500": "#4169e1",
              "600": "#3957d7",
              "700": "#3044c5",
              "800": "#2d39a0",
              "900": "#29347f",
              DEFAULT: "#3044c5",
              foreground: "#DAE3E5",
            },
            secondary: {
              "50": "#f6f6f6",
              "100": "#e7e7e7",
              "200": "#d1d1d1",
              "300": "#b0b0b0",
              "400": "#888888",
              "500": "#6d6d6d",
              "600": "#5d5d5d",
              "700": "#4f4f4f",
              "800": "#454545",
              "900": "#3d3d3d",
              DEFAULT: "#5d5d5d",
              foreground: "#b0b0b0",
            },
            focus: "#2d39a0",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
export default config;
