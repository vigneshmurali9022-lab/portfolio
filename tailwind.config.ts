import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: { extend: {
    colors: { ink: "#010205", snow: "#E1E4F2", mist: "#A4B4D2", plum: "#302B46", lilac: "#E9CAFD" },
    fontFamily: { sans: ["var(--font-manrope)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
