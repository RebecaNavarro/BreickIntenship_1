const VideoInicio = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          marginBottom: "30px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        CONOCE ACERCA DE NUESTROS <br />
        PRODUCTOS
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "16/9",
            maxWidth: "900px",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/RdgNe4unjSM?si=XyBbXgDlDqy4ZBmI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)'
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoInicio;
