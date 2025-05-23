const   PastPromocions = () => {
    const Ganador1 = "https://breick.com.bo/wp-content/uploads/2024/07/447663763_863659785796810_7224462264622360521_n.jpg";
    const Ganador2 = "https://breick.com.bo/wp-content/uploads/2024/07/447663763_863659785796810_7224462264622360521_n.jpg";
    const Ganador3 = "https://breick.com.bo/wp-content/uploads/2024/07/447671081_863660665796722_8613859471435672319_n.jpg";
    const Ganador4 = "https://breick.com.bo/wp-content/uploads/2024/07/447666918_863660529130069_4012736014461057616_n.jpg";
    const Lista1 ="https://breick.com.bo/wp-content/uploads/2024/01/417882986_760703292759127_6474783852820075769_n.jpeg";
    const Lista2 ="https://breick.com.bo/wp-content/uploads/2024/01/417882986_760703292759127_6474783852820075769_n.jpeg";

    return (
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h2 style={{
                fontSize: '17px',
                fontWeight: 'bold',
                marginBottom: '30px',
                color: '#333'
            }}>
                Conoce a los ganadores de nuestra Promoción:
                Con Breick, Papá Noel te lleva de vacaciones
            </h2>
            
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '20px'
            }}>
                <div style={{
                    width: '200px',
                    textAlign: 'center'
                }}>
                    <img
                        src={Ganador1}
                        alt="Ganador 1"
                        style={{
                            width: '100%',
                            height: 'auto',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
                
                <div style={{
                    width: '200px',
                    textAlign: 'center'
                }}>
                    <img
                        src={Ganador2}
                        alt="Ganador 2"
                        style={{
                            width: '100%',
                            height: 'auto',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
                
                <div style={{
                    width: '200px',
                    textAlign: 'center'
                }}>
                    <img
                        src={Ganador3}
                        alt="Ganador 3"
                        style={{
                            width: '100%',
                            height: 'auto',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
                
                <div style={{
                    width: '200px',
                    textAlign: 'center'
                }}>
                    <img
                        src={Ganador4}
                        alt="Ganador 4"
                        style={{
                            width: '100%',
                            height: 'auto',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
            </div>
            
            <h2 className="mt-7  font-bold">Conoce a los ganadores de nuestra Promoción:  Con Breick, Papá Noel te lleva de vacaciones:</h2>
            <div className="flex flex-row justify-center" style={{padding: "20px", gap: '20px',}}>
                <img
                    src={Lista1}
                    alt="Promoción Brack"
                    style={{
                    maxWidth: "30%",
                    height: "auto",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    }}
                />
                <img
                    src={Lista2}
                    alt="Promoción Brack"
                    style={{
                    maxWidth: "30%",
                    height: "auto",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    }}
                />
            </div>
        </div>
    );
}

export default PastPromocions;