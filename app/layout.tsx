import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     

      <body className="relative overflow-x-hidden">
        {/* ✅ Navbar fixed and always above everything */}
        <div className="relative z-[9999]">
          <Navbar />
        </div>

        {/* ✅ Page content (hero, etc.) below navbar */}
        <main className="relative z-[1]">{children}</main>
      </body>
    </html>
  );
}
