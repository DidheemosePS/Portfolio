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
        hibiscus: "#B43757",
      },
      width: {
        "2sm-imageWidth-20rem": "20rem",
        "lg-imageWidth-30rem": "30rem",
        "xl-imageWidth-35rem": "35rem",
      },
      height: {
        "imageHeight-40rem": "40rem",
      },
    },
  },
  plugins: [],
};
export default config;
