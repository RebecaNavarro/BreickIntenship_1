const PromocionesVigentes = () => {
  // Datos de las promociones (imagen + texto como en tu imagen)
  const promociones = [
    {
      imagen: "https://breick.com.bo/wp-content/uploads/2024/02/reverso-2.jpg",
      pdf: "https://breick.com.bo/wp-content/uploads/2024/02/RESOLUCION-ADMINISTRATIVA-DE-AUTORIZACION-N%C2%B0-05-00034-24-DE-FECHA-20-DE-FEBRERO-DE-2024-Y-PROYECTO-DE-DESARROLLO-DE-PROMOCION-EMPRESARIAL-APROBADO.pdf",
      titulo: "Resolución AJ"
    },
    {
      imagen: "https://breick.com.bo/wp-content/uploads/2023/11/Navidad-2023.jpg",
      pdf: "https://breick.com.bo/wp-content/uploads/2023/11/promocion-empresarial-con-Breick-papa-N-comprimido.pdf",
      titulo: "Resolución AJ"
    },
    {
      imagen: "https://breick.com.bo/wp-content/uploads/2023/02/portada-web.jpeg",
      pdf: "https://breick.com.bo/wp-content/uploads/2023/11/promocion-empresarial-con-Breick-papa-N-comprimido.pdf",
      titulo: "Resolución AJ"
    },
    {
      imagen: "https://breick.com.bo/wp-content/uploads/2021/07/promoguardianes.jpg",
      pdf: "https://breick.com.bo/wp-content/uploads/2021/07/Promo-Guardianes-de-la-Pascua-2022-final.pdf",
      titulo: "Resolución AJ"
    },
    {
      imagen: "https://breick.com.bo/wp-content/uploads/2021/07/promoguardianes.jpg",
      pdf: "https://breick.com.bo/wp-content/uploads/2022/10/AJ-choco-Mmmndial-2022.pdf",
      titulo: "Resolución AJ"
    },
    {
      imagen: "https://breick.com.bo/wp-content/uploads/2022/05/275663400_5564731283556434_6925020867817076695_n.jpeg",
      pdf: "https://breick.com.bo/wp-content/uploads/2022/03/Autorizacio%CC%81n-Nitro-Pascua-Breick-comprimido.pdf",
      titulo: "Resolución AJ"
    }
  ];

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center"
    }}>
      <h2 style={{
        color: "#333",
        fontSize: "24px",
        textTransform: "uppercase",
        marginBottom: "30px"
      }}>
        PROMOCIONES PASADAS
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "15px",
        alignItems: "center",
        justifyItems: "center"
      }}>
        {promociones.map((promo, index) => (
          <div key={index} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            width: "100%"
          }}>
            <div style={{
              width: "100%",
              height: "200px", // Altura fija para uniformidad
              overflow: "hidden",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <img
                src={promo.imagen}
                alt={`Promoción ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            
            {/* Botón */}
            <a
              href={promo.pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                width: "100%",
                maxWidth: "200px"
              }}
            >
              <div style={{
                backgroundColor: "#22CC85",
                color: "white",
                padding: "12px 20px",
                fontSize: "16px",
                borderRadius: "20px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#1DAF74";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#22CC85";
                e.currentTarget.style.transform = "scale(1)";
              }}>
                {promo.titulo}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromocionesVigentes;