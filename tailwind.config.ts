import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      nexa: ["Nexa", "inter", "ui-sans-serif", "system-ui"],
    },
    extend: {
      backgroundImage: {
        "white-pattern": "url('/public/logo.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        "theme": "#401176",
      },
    },
  },
  plugins: [],
};
export default config;
