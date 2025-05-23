const PromocionesVigentes = () => {
  const imagenPromocion =
    "https://breick.com.bo/wp-content/uploads/2025/03/pascuachococraft.jpg";

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2
        style={{
          color: "#333",
          fontSize: "18px",
          textTransform: "uppercase",
          paddingBottom: "10px",
        }}
      >
        PROMOCIONES VIGENTES:
      </h2>

      <div
        style={{
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <div className="flex justify-center" style={{ marginBottom: "20px" }}>
          <img
            src={imagenPromocion}
            alt="Promoción Brack"
            style={{
              maxWidth: "100%",
              height: "auto",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        <a
          href="https://breick.com.bo/wp-content/uploads/2025/03/RESOLUCION-ADMINISTRATIVA-DE-AUTORIZACION-N%C2%B0-05-00061-25-PASCUACHOCOCRAFT.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          <button
            style={{
              backgroundColor: "#22CC85",
              color: "white",
              border: "none",
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#1DAF74")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#22CC85")
            }
          >     
            Resolución AJ
          </button>
        </a>
      </div>
    </div>
  );
};

export default PromocionesVigentes;
