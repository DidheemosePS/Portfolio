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
      colors: {
        "red-#ff044c": "#ff044c",
        "hibiscus": "#B43757",
        "box-color":"#262626",
        "dark-theme":"#080808"
      },
      maxWidth: {
        "30": "30rem",
        "20": "20rem",
        "17": "17rem",
      },
      height: {
        "25": "25rem",
        "30": "30rem",
      },
      maxHeight: {
        "40": "40rem",
      },
    },
  },
  plugins: [],
};
export default config;
