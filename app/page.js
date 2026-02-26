export default function Home() {
  return (
    <main style={{
      background: "#0f172a",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1>🚀 NebulaBlog Platform</h1>
      <p>Your elite startup-level blog is now running on Next.js and Vercel.</p>

      <button style={{
        padding: "12px 20px",
        background: "#3b82f6",
        border: "none",
        borderRadius: "8px",
        color: "white",
        marginTop: "20px"
      }}>
        Create Post
      </button>
    </main>
  );
}
