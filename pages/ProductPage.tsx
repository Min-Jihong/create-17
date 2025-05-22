import React from 'react';
import ProductDetails from '../components/ProductDetails';

const ProductPage: React.FC = () => {
  const productId = '123';

  return (
    <div className='flex flex-col items-center mt-10'>
      <h1 className='text-3xl font-bold mb-4'>Product Page</h1>
      <ProductDetails productId={productId} />
    </div>
  );
};

export default ProductPage;