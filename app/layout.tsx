"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import FooterForm from "@/components/FooterForm";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showForm, setShowForm] = useState(false); // GLOBAL POPUP FORM STATE

  return (
    <html lang="en">
       <head>
        {/* ✅ META PIXEL — placed inside head as Meta recommends */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2679719842383703');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2679719842383703&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="relative overflow-x-hidden">

        {/* NAVBAR */}
        <div className="relative z-[9999]">
          {/* PASS openForm TO NAVBAR */}
          <Navbar openForm={() => setShowForm(true)} />
        </div>

        {/* FLOATING CONTACT BUTTON */}
        <FloatingContactButton openForm={() => setShowForm(true)} />
<WhatsAppButton /> 
        {/* PAGE CONTENT */}
        <main className="relative z-[1]">
          {children}
        </main>

        <Footer />

        {/* GLOBAL FORM POPUP */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm 
                         flex items-center justify-center p-4 z-[99999]"
              onClick={() => setShowForm(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-md"   // FIXED: Correct size + center
                onClick={(e) => e.stopPropagation()}
              >
                {/* CLOSE BUTTON */}
                <button
                  className="absolute -top-4 -right-4 bg-white text-black 
                             w-10 h-10 rounded-full shadow-lg hover:bg-gray-200"
                  onClick={() => setShowForm(false)}
                >
                  ✕
                </button>

                {/* YOUR EXISTING FORM */}
                <FooterForm />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </body>
    </html>
  );
}
