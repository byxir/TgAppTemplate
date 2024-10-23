/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      screens: {
        tall: "700px",
      },
      fontFamily: {
        mon: "mon",
        monCyr: "monCyr",
      },
      boxShadow: {
        gameGlow: "0px 0px 80px 0px rgba(13, 65, 118, 0.7)",
      },

      dropShadow: {
        innerCustom1: "0px -4px 4px rgba(0, 0, 0, 0.5)",
        innerCustom2: "0 4px 4px rgba(0, 0, 0, 0.5)",
        gameGlow: "0px 0px 80px 0px rgba(13, 65, 118, 0.7)",
      },
      colors: {
        bg: "#2C0049",
        darkBg: "#1A0036",
        inventoryItemBg: "rgba(33, 1, 67, 0.55)",
        yellowAccent: "#FFFF8A",
        pinkAccent: "#FF0084",
        subaccent: "rgba(255, 255, 255, 0.1)",
        customGreen: "#04E307",
      },
      boxShadow: {},

      borderRadius: {
        cs: "20px",
      },
      keyframes: {
        flyCoin: {
          "0%": {
            transform: "translateY(0) translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform:
              "translateY(-100vh) translateX(var(--translateHorizontal))",
            opacity: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" }, // Starting and ending point
          "50%": { transform: "translateY(-16px) scale(1.05)" }, // Peak upward float and scale
        },
        float2: {
          "0%, 100%": { transform: "translateY(0)" }, // Starting and ending point
          "50%": { transform: "translateY(-10px)" }, // Peak upward float and scale
        },
        floatSmall: {
          "0%, 100%": { transform: "translateY(0)" }, // Starting and ending point
          "50%": { transform: "translateY(-4px)" }, // Peak upward float and scale
        },
        float3: {
          "0%, 100%": { transform: "translateY(0)" }, // Starting and ending point
          "50%": { transform: "translateY(10px)" }, // Peak upward float and scale
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "scale-fade": {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        flyCoin: "flyCoin 1s forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        float: "float 8s ease-in-out infinite",
        float2: "float2 6s ease-in-out infinite",
        floatSmall: "floatSmall 6s ease-in-out infinite",
        float3: "float3 6s ease-in-out infinite",
        scaleFade: "scale-fade 1s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
