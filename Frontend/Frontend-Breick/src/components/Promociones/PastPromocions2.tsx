const PastPromocions = () => {

    const P1 = "https://breick.com.bo/wp-content/uploads/2023/06/2-copia.jpg";
    const P2 = "https://breick.com.bo/wp-content/uploads/2023/06/4.jpg";
    const P3 = "https://breick.com.bo/wp-content/uploads/2023/06/20.jpg";
    const P4 = "https://breick.com.bo/wp-content/uploads/2023/06/3-copia.jpg";  
    const P5 = "https://breick.com.bo/wp-content/uploads/2023/06/16.jpg";  
    const P6 = "https://breick.com.bo/wp-content/uploads/2023/06/13.jpg"; 
    const P7 = "https://breick.com.bo/wp-content/uploads/2023/06/14.jpg"; 
    const P8 = "https://breick.com.bo/wp-content/uploads/2023/06/14.jpg"; 

    return (
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '30px',
                color: '#333'
            }}>
                Conoce a los ganadores de nuestra pasada Promoción: Pascua Heroes 2023
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
                        src={P1}
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
                        src={P2}
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
                        src={P3}
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
                        src={P4}
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
                    <div style={{
                    width: '200px',
                    textAlign: 'center'
                }}>
                    <img
                        src={P5}
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
                        src={P6}
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
                        src={P7}
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
                        src={P8}
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


            </div>
        </div>
    );
}

export default PastPromocions;