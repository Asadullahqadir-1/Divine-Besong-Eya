import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080A0C",
        navy: "#0E1B2D",
        gold: "#B58A3B",
        "gold-light": "#D4AE5C",
        bone: "#F5F0E8",
        slate: "#2C2C2C",
        light: "#EDE8DE",
        mist: "#F2F1EC",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 20px 40px rgba(8,10,12,0.12)",
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at 20% 20%, rgba(181,138,59,0.16), transparent 45%), radial-gradient(circle at 80% 0%, rgba(14,27,45,0.24), transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
