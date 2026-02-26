export default function CreatePost() {
  return (
    <main style={{
      background: "#0f172a",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1>Create New Post</h1>

      <form style={{ marginTop: "20px" }}>
        <input
          placeholder="Post title"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "none"
          }}
        />

        <textarea
          placeholder="Write your content..."
          style={{
            width: "100%",
            height: "200px",
            padding: "12px",
            borderRadius: "6px",
            border: "none"
          }}
        />

        <button
          style={{
            marginTop: "10px",
            padding: "12px 20px",
            background: "#3b82f6",
            border: "none",
            borderRadius: "6px",
            color: "white"
          }}
        >
          Publish Post
        </button>
      </form>
    </main>
  );
}
