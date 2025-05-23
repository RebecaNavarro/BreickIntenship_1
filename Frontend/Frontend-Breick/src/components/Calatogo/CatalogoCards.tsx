import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiImage } from 'react-icons/fi';
import Footer from '../Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string; 
  category: string;
}

const CatalogoEcommerce: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Conejito Alegria Café (30gr)',
      price: 8.50,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/03/2-conejos-alegria-300x225.png', // URL de imagen
      category: 'Conejito',
    },
    {
      id: 2,
      name: 'Conejito Alegria de Colores (30gr)',
      price: 8.50,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/03/2-conejos-alegria-colores-300x225.png', // URL de imagen
      category: 'Conejito',
    },
    {
      id: 3,
      name: 'Conejito con huevo de pascua (42gr)',
      price: 10,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/03/conejito-huevo-pascua-300x225.png', // URL de imagen
      category: 'Conejito',
    },
    {
      id: 4,
      name: 'Conejito de sabores surtidos',
      price: 7,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/03/2-conejitos-de-sabores-300x225.png', // URL de imagen
      category: 'Conejito',
    },
    {
      id: 5,
      name: 'Conejito Oreja Gacha N°2 Blanco (105 g)',
      price: 28,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/03/conejo-oreja-gacha-2-blanco-300x225.png', // URL de imagen
      category: 'Conejito',
    },
    {
      id: 6,
      name: 'Conejito Oreja Gacha N°2 Café (105 g)',
      price: 28,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/03/conejo-gacha2-cafe-300x225.png', // URL de imagen
      category: 'Conejito',
    },
    {
      id: 7,
      name: 'Conejito Saltarín (75 g)',
      price: 22,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/08/conejo-saltarin-75g-300x225.png', // URL de imagen
      category: 'Conejito',
    },
    {
      id: 8,
      name: 'Conejito Sentado N° 1 (28 g)',
      price: 7,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/08/conejo-sentado-n1-28g-300x225.png', // URL de imagen
      category: 'Conejito',
    },
    {
      id: 9,
      name: 'Conejito Sentado N° 2 (50 g)',
      price: 15,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/03/conejo-sentado2-300x225.png', // URL de imagen
      category: 'Conejito',
    },
    {
      id: 10,
      name: 'Huevitos 77% Diet (84 g) Cacao ',
      price: 36,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2025/04/huevitos-77-300x225.jpg', // URL de imagen
      category: 'Huevitos',
    },
    {
      id: 11,
      name: 'Huevitos 77% Diet (84 g) Cacao y flor y arandano',
      price: 39,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2025/04/huevitos-77-ara%E2%95%A0undano-480x359.jpg', // URL de imagen
      category: 'Huevitos',
    },
    {
      id: 12,
      name: 'Huevitos 77% Diet (84 g) Cacao y flor y jamaica',
      price: 39,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2025/04/huevitos-77-jamaica-300x225.jpg', // URL de imagen
      category: 'Huevitos',
    },
    {
      id: 13,
      name: 'Huevitos 77% Diet (84 g) Cacao y flor y frutilla',
      price: 39,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2025/04/huevitos-77-frutilla-300x225.jpg', // URL de imagen
      category: 'Huevitos',
    },
    {
      id: 14,
      name: 'Huevo N° 0 de 20 Und. (140 g)',
      price: 35,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2022/07/21-300x225.png', // URL de imagen
      category: 'Huevo',
    },
    {
      id: 15,
      name: 'Huevo N° 0 en Bolsa. (500 g)',
      price: 120,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/08/huevo-N0-chocolate-con-leche-500g-300x225.png', // URL de imagen
      category: 'Huevo',
    },
    {
      id: 16,
      name: 'Huevo N° 0 de 20 Und. (140 g)',
      price: 36,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2022/07/22-300x225.png', // URL de imagen
      category: 'Huevo',
    },
    {
      id: 17,
      name: 'Huevo N° 0 Diet en Bolsa. (140 g)',
      price: 49,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2025/04/huevo-0-chocolate-con-leche-sin-azucar-140-300x225.jpg', // URL de imagen
      category: 'Huevo',
    },
    {
      id: 18,
      name: 'Huevo N° 0 Diet en Bolsa. (500 g)',
      price: 170,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/08/huevo-n0-chocolate-con-leche-sin-azucar-500g-300x225.png', // URL de imagen
      category: 'Huevo',
    },
    {
      id: 19,
      name: 'Huevo N° 1 (9 g)',
      price: 2.80,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2025/04/huevo-1-300x225.jpg', // URL de imagen
      category: 'Huevo',
    },
    {
      id: 20,
      name: 'Huevo N° 2 (9 g)',
      price: 4.80,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2025/04/huevo-2-300x225.jpg', // URL de imagen
      category: 'Huevo',
    },
    {
      id: 21,
      name: 'Caja Berries (190 g)',
      price: 49,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2019/12/caja_berries-300x225.png', // URL de imagen
      category: 'Cajas',
    },
    {
      id: 22,
      name: 'Caja Corazones (100 g)',
      price: 49,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2022/06/corazones-300x225.png', // URL de imagen
      category: 'Cajas',
    },
    {
      id: 23,
      name: 'Caja Menta (190 g)',
      price: 49,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/08/caja-menta-190g-300x225.png', // URL de imagen
      category: 'Cajas',
    },
    {
      id: 24,
      name: 'Caja Piramide (120 g)',
      price: 39,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2020/06/piramide-bombones-selectos-300x225.png', // URL de imagen
      category: 'Cajas',
    },
    {
      id: 25,
      name: 'Rosa de Chocolate Breick (100 g)',
      price: 15,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2018/12/ROSITA-300x225.png', // URL de imagen
      category: 'Rosas',
    },
    {
      id: 26,
      name: 'Tableta Blanco (100 gr)',
      price: 18,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2018/12/chocolateblanco-300x225.png', // URL de imagen
      category: 'Tabletas',
    },
    {
      id: 27,
      name: 'Tableta Mani (100 g)',
      price: 18,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/08/tableta-mani-300x225.png', // URL de imagen
      category: 'Tabletas',
    },
    {
      id: 28,
      name: 'Tableta Diet Blanco (100 g)',
      price: 30,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2020/06/tableta-sin-azucar-blanco-300x225.png', // URL de imagen
      category: 'Tabletas',
    },

    {
      id: 29,
      name: 'Tableta Rellena Damasco (95 g)',
      price: 20,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2022/07/54-300x225.png', // URL de imagen
      category: 'Tabletas',
    },
    {
      id: 30,
      name: 'Tableta Rellena Frambuesa (100 g)',
      price: 20,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/08/tableta-rellena-frambuesa-300x225.png', // URL de imagen
      category: 'Tabletas',
    },
    {
      id: 31,
      name: 'Tableta Rellena Frutilla (100 g)',
      price: 20,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2022/07/52-300x225.png', // URL de imagen
      category: 'Tabletas',
    },
    {
      id: 32,
      name: 'Tableta Rellena Maracuya (100 g)',
      price: 20,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2022/07/50-300x225.png', // URL de imagen
      category: 'Tabletas',
    },
    {
      id: 33,
      name: 'Tableta Rellena Mora (95 g)',
      price: 20,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2018/12/49-300x225.png', // URL de imagen
      category: 'Tabletas',
    },
    {
      id: 34,
      name: 'Tableta 50% Cacao (95 g)',
      price: 32,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2018/12/34-300x225.png', // URL de imagen
      category: 'Tabletas',
    },
    {
      id: 35,
      name: 'Tableta 60% Cacao (95 g)',
      price: 34,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2018/12/35-300x225.png', // URL de imagen
      category: 'Tabletas',
    },
    {
      id: 36,
      name: 'Tableta 70% Cacao (95 g)',
      price: 36,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2018/12/70cacao-300x225.png', // URL de imagen
      category: 'Tabletas',
    },
    {
      id: 37,
      name: 'Jarabe de Chocolate (400 gr)',
      price: 38,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2022/07/56-300x225.png', // URL de imagen
      category: 'Jarabes',
    },
    {
      id: 38,
      name: 'Conejo de la Suerte (240 gr)',
      price: 52,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/03/conejo-de-la-suerte-300x225.png', // URL de imagen
      category: 'Conejito',
    },
    {
      id: 39,
      name: 'Conejo XL de Pascua Breick (3600 gr)',
      price: 750,
      imageUrl: 'https://breick.com.bo/wp-content/uploads/2023/03/huevo-xl-300x225.png', // URL de imagen
      category: 'Conejito',
    },
  ]);

  const [imageStatus, setImageStatus] = useState<Record<number, 'loading' | 'loaded' | 'error'>>({});
  const [cart, setCart] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm] = useState<string>('');

  useEffect(() => {
    products.forEach(product => {
      const img = new Image();
      img.src = product.imageUrl;
      img.onload = () => {
        setImageStatus(prev => ({ ...prev, [product.id]: 'loaded' }));
      };
      img.onerror = () => {
        setImageStatus(prev => ({ ...prev, [product.id]: 'error' }));
      };
    });
  }, [products]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return (
    <>
    

    <div className="container mx-auto px-4 py-8">
          {/* Encabezado y buscador */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Catálogo Online</h1>

          </div>

          {/* Filtros */}
          <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
              {categories.map(category => (
                  <button
                      key={category}
                      className={`px-4 py-2 mx-1 rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-emerald-400 text-white' : 'bg-gray-200 text-gray-700'}`}
                      onClick={() => setActiveCategory(category)}
                  >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
              ))}
          </div>

          {/* Listado de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-4">
                          {/* Contenedor de imagen con estados */}
                          <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                              {imageStatus[product.id] === 'loading' && (
                                  <div className="animate-pulse flex flex-col items-center">
                                      <FiImage className="text-gray-400 text-2xl mb-2" />
                                      <span className="text-gray-500 text-sm">Cargando imagen...</span>
                                  </div>
                              )}
                              {imageStatus[product.id] === 'error' && (
                                  <div className="flex flex-col items-center text-gray-500">
                                      <FiImage className="text-gray-400 text-2xl mb-2" />
                                      <span className="text-sm">Imagen no disponible</span>
                                  </div>
                              )}
                              {imageStatus[product.id] === 'loaded' && (
                                  <img
                                      className="w-full h-full object-contain"
                                      src={product.imageUrl}
                                      alt={product.name}
                                      onError={() => setImageStatus(prev => ({ ...prev, [product.id]: 'error' }))} />
                              )}
                          </div>
                          <div className="flex justify-between items-start mb-1">
                              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                          </div>
                          <div className='flex mb-2'>
                              <span className="text-xl font-bold text-emerald-600">Bs. {product.price}</span>
                          </div>
                          <button
                              onClick={() => addToCart(product)}
                              className="w-full flex items-center justify-center py-2 px-4 bg-emerald-400 hover:bg-fuchsia-700 text-white rounded-lg transition-colors"
                          >
                              <FiShoppingCart className="mr-2" />
                              Añadir al carrito
                          </button>
                      </div>
                  </div>
              ))}
          </div>
              
          

          {/* Mini carrito */}
          {cart.length > 0 && (
              <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-xl border border-gray-200 z-10">
                  <div className="flex items-center">
                      <FiShoppingCart className="text-emerald-400 mr-2" />
                      <span className="font-medium">{cart.length} items</span>
                      <span className="ml-2 font-bold">${cart.reduce((sum, item) => sum + item.price, 0)}</span>
                  </div>
                  
              </div>
              
          )}
      </div>
    </>
    
      
      
    
  );
};

export default CatalogoEcommerce;