// src/pages/AutoParts/ProductDetailsPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPartById, getRelatedParts } from '../../data/AutoPartsData';
import { useCart } from '../../components/AutoParts/CartContext';
import ProductCard from '../../components/AutoParts/ProductCard';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = getPartById(id);
  const relatedProducts = product ? getRelatedParts(product.id) : [];

  if (!product) {
    return <div className="text-center py-16">Product not found.</div>;
  }

  return (
    <div className="bg-slate-50 pt-16">
        <div className="container mx-auto p-4 md:p-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Product Image */}
                    <div className="md:w-1/2 flex justify-center items-center bg-gray-100 rounded-lg p-4">
                        <img src={product.image} alt={product.name} className="max-w-full h-auto object-contain max-h-96"/>
                    </div>

                    {/* Product Details */}
                    <div className="md:w-1/2 space-y-4">
                        <p className="text-sm font-semibold text-teal-600">{product.category}</p>
                        <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
                        <p className="text-3xl text-gray-800 font-bold">₹{product.price.toFixed(2)}</p>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>

                        <div className="grid grid-cols-2 gap-2 text-gray-600 border-t pt-4">
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>SKU:</strong> {product.sku}</p>
                            <p><strong>Stock:</strong> <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                            </span></p>
                            <p><strong>Rating:</strong> {product.rating} / 5</p>
                        </div>

                        <button onClick={() => addToCart(product)} disabled={product.stock === 0}
                            className="mt-6 w-full px-6 py-4 bg-teal-500 text-white font-bold rounded-lg shadow-lg hover:bg-teal-600 transition disabled:bg-gray-400">
                            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedProducts.map((p) => (
                        <ProductCard key={p.id} part={p} />
                    ))}
                </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default ProductDetailsPage;