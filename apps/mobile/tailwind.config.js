/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#4f46e5",
                secondary: "#10b981",
                background: "#f9fafb",
                surface: "#ffffff",
                text: {
                    primary: "#111827",
                    secondary: "#6b7280",
                },
                border: "#e5e7eb",
            },
        },
    },
    plugins: [],
}
