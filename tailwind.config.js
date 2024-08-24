/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Stone_100: "hsl(30, 54%, 90%)",
                c_Stone_150: "hsl(30, 18%, 87%)",
                c_Stone_600: "hsl(30, 10%, 34%)",
                c_Stone_900: "hsl(24, 5%, 18%)",
                c_Brown_800: "hsl(14, 45%, 36%)",
                c_Rose_800: "hsl(332, 51%, 32%)",
                c_Rose_50: "hsl(330, 100%, 98%)",
            },
            fontFamily: {
                young_serif: ["Young Serif", "serif"],
                outfit: ["Outfit", "sans-serif"]
            }
        },
    },
    plugins: [],
}

