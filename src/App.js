function App() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1f2937, #111827)",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <div style={{
        backgroundColor: "#1f2937",
        padding: "30px",
        borderRadius: "12px",
        width: "300px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
      }}>
        <h2 style={{
          color: "white",
          textAlign: "center",
          marginBottom: "20px"
        }}>
          Login Cognito 🔐
        </h2>

        <input
          type="text"
          placeholder="Usuario"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "none",
            outline: "none"
          }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "none",
            outline: "none"
          }}
        />

        <button style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default App;