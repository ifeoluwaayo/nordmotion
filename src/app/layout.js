import { Comic_Neue as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Nord Motion: Driving Africa Forward",
  description:
    "Nord Motion is a Nigerian automotive manufacturer that is changing the way people drive in Africa. With its focus on quality, affordability, and reliability, Nord Motion is quickly becoming one of the most popular automotive brands on the continent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
