import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
export default function Products({onAdd}) {
  const [products, setProducts] = useState([]);
}

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []); // IMPORTANTE

  return (
    <div className="pt-32 px-6">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>

      {/* GRID RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {products.map(product => (
          <ProductsCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={price}

            onAdd={() => onAddToCart(product)}
          />
        ))}

          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-4 hover:shadow-lg transition"
          >

            {/* Imagen */}
            <div className="w-full h-48 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>

            {/* Título + Categoría */}
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-sm line-clamp-1">
                {product.title}
              </h2>

              <span className="text-xs bg-gray-200 px-2 py-1 rounded-md capitalize">
                {product.category}
              </span>
            </div>

            {/* Descripción */}
            <p className="text-gray-600 text-sm line-clamp-2">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex justify-between text-sm text-gray-700">
              <span>⭐ {product.rating.rate}</span>
              <span>({product.rating.count})</span>
            </div>

            {/* Precio + Botón */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Comprar
              </button>
            </div>

          </div>
        

      </div>
    </div>
  );
}