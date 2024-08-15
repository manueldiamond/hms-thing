import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        error:'#AB2C10',
        'warning-dark':'#A35200',
        warning:'#EDC843',
        positive:'#069035',
        links:'#04021D',
        para:'#424242',
        base:'#4C3DFF',
        dark:'#232323',
        grey:'#878787',
        light:'#FAFAFA',
        inactive:'#DCDCDC',
      },
      container: {
        padding: '1rem',
        
      }
    },
  },
  plugins: [],
};
export default config;
