import { jsx as _jsx } from "react/jsx-runtime";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "P.E.E.R Admin Portal",
    description: "Admin portal for managing students, performance, and assignments",
};
export default function RootLayout({ children, }) {
    return (_jsx("html", { lang: "en", children: _jsx("body", { className: inter.className, children: children }) }));
}
