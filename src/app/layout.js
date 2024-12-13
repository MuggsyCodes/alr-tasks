//think of this as the root folder for the project

import "./globals.css";
import { poppins } from "@/components/ui/fonts";
import { AuthProvider } from "@/context/AuthContext";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";

export const metadata = {
  metadata: new URL("http://localhost:3000"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "en-US",
    },
  },
  openGraph: {
    title: "My Tasks",
    description: "A simple way to manage your tasks without the headache",
    url: "http://localhost:3000", // update to production URL once available
    siteName: "My Tasks",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Tasks",
    description: "A simple way to manage your tasks without the headache",
    creator: "Carlos Avila",
    images: ["/twitter-image.png"],
  },
  title: "My Tasks",
  description: "A simple way to manage your tasks without the headache",
  keywords: "todo, tasks, task manager",
  author: "Carlos Avila 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${poppins.className} antialiased`}>
        <AuthProvider>
          <NavBar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
