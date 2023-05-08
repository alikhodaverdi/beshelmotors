import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  weight: "500",
  subsets: ["arabic"],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className={vazirmatn.className} dir="rtl">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
