import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "search-icon": "url('/assets/icons/search.svg')",
      },
      backgroundColor: {
        "btn-hover": "#0d9b5e",
        panel: "#181818",
      },
      colors: {
        primary: "#21AB71",
        "hover-primary": "#ffffff2a",
        text: {
          primary: "#212636",
          secondary: "#667085",
        },
        red: "#C94040",
        lightGray: "#DCDFE4",
        divider: "#DCDFE4",
        borderGray: "#B3B9C6",
        lightBlack: "#00000033",
        grayBG: "#F2F5F6",
      },
      boxShadow: {
        "box-shadow": " 0px 5px 22px 0px #0000000A",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
export default config;
