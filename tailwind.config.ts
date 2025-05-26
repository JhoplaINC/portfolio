import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#A8E6CF",
                "primary-hover": "#96d6b8",
                secondary: "#8EC6C5",
                "secondary-hover": "#7ab3b2",
                tertiary: "#FFFAF0",
                "tertiary-hover": "#efe5d8",
                quaternary: "#FFD3B6",
                "quaternary-hover": "#f4b58f",
            },
        },
    },

    plugins: [],
} satisfies Config;
