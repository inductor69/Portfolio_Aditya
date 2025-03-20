/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '1.25rem', // Increased from default 1rem (16px) to 18px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ctp: {
          rosewater: "#f5e0dc",
          flamingo: "#f2cdcd",
          pink: "#f5c2e7",
          mauve: "#cba6f7",
          red: "#f38ba8",
          maroon: "#eba0ac",
          peach: "#fab387",
          yellow: "#f9e2af",
          green: "#a6e3a1",
          teal: "#94e2d5",
          sky: "#89dceb",
          sapphire: "#74c7ec",
          blue: "#89b4fa",
          lavender: "#b4befe",
          text: "#cdd6f4",
          subtext1: "#bac2de",
          subtext0: "#a6adc8",
          overlay2: "#9399b2",
          overlay1: "#7f849c",
          overlay0: "#6c7086",
          surface2: "#585b70",
          surface1: "#45475a",
          surface0: "#313244",
          base: "#1e1e2e",
          mantle: "#181825",
          crust: "#11111b"
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        catppuccin: {
          primary: "#cc0000",    // deep ruby red
          secondary: "#990000",  // darker ruby
          accent: "#800000",     // darkest ruby
          neutral: "#13131a",    // darkest surface
          "base-100": "#0d0d12", // darker base
          "base-200": "#0a0a0e", // darkest base
          "base-content": "#e0e0e0", // softer text
          info: "#7aa2f7",      // bright blue
          success: "#9ece6a",    // nature green
          warning: "#e0af68",    // warm yellow
          error: "#800000",      // deep ruby red
        },
      },
    ],
  },
};
