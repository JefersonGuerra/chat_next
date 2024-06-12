import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'color_1': '#E0E0E0',
        'color_2': '#C5C5C5',
        'color_3': '#6A6C6A',
        'color_4': '#5A5C5A',
        'color_5': '#424242',
        'color_6': '#1A8251',
        'color_7': '#931515',
        'color_8': '#111b21',
        'color_9': '#202c33',
        'color_10': '#2a3942',
        'color_11': '#005c4b',
        'color_12': '#0b141a',
        'color_13': '#0c1317',
      },
      backgroundImage: {
        'send': "url('../assets/img/send.svg')",
        'defaultBackground': "url('../assets/img/default_background.png')",
        'newChat': "url('../assets/img/new_chat.svg')",
        'leftArrow': "url('../assets/img/left-arrow.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
