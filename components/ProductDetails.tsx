import React from 'react';

interface ProductDetailsProps {
  productId: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
  return <div className='font-semibold text-lg'>Product Details for: <span className='text-blue-500'>{productId}</span></div>;
};

export default ProductDetails;