import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey="PUB_KEY">
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
