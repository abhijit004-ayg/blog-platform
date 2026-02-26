export const metadata = {
  title: "NebulaBlog",
  description: "Elite startup-level blog platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
