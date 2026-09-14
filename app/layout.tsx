import "./globals.css";

export const metadata = {
  title: "Anora Charts",
  description: "Personal music charts by Anora"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
