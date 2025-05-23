import { useState } from 'react';
import imagen1 from "/logo-rse.png";
import imagen2 from "/creativa.jpg";
import imagen3 from "/cieli.jpg";
import imagen4 from "/caleidoscopio.jpg";

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: imagen1},
        { src: imagen2},
        { src: imagen3},
        { src: imagen4}
    ];

    return (
        <div className="gallery-section" >

            <div className="gallery-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px', maxWidth: '1200px', margin: '0 auto' }} >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        style={{ width: '200px', height: '200px', overflow: 'hidden', cursor: 'pointer' }}
                        onClick={() => setSelectedImage(image.src)}
                    >
                        <img src={image.src} />
                    </div>
                ))}
            </div>

            {/* Modal para el zoom */}
            {selectedImage && (
                <div
                    className="modal-overlay"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        cursor: 'pointer'
                    }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="modal-content" style={{ maxWidth: '90%', maxHeight: '90%' }}>
                        <img src={selectedImage} alt="Imagen ampliada" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GallerySection;