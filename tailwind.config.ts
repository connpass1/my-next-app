import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        gallery: "4 / 3",
      },

      fontFamily: {
        font1: ["var(--font-font1)"],
        font3: ["var(--font-font3)"],
        font2: ["var(--font-font2)"],
      },
      colors: {
        primary: "#1d4ed8",
        primary_light: "#3b82f6",
        primary_dark: "#1e3a8a",
        error_dark: "#991b1b",
        error_light: "#dc2626",
        error: "#b91c1c",
        base: "#020617",
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: any }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("hover-a", "& > a:hover");
      addVariant("child-a", "& > a"); 
    },
  ],
};
export default config;
