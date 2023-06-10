import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage.js';
import { useState, useMemo } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);
  const price  = useMemo(() => {
    return props.basePrice + currentSize.additionalPrice;
  }, [currentSize]);

  function handleClick(event) {
    event.preventDefault();
    console.log('Summary');
    console.log('===============');
    console.log('Name:', props.name);
    console.log('Price:', props.basePrice + currentSize.additionalPrice);
    console.log('Size:', currentSize.name);
    console.log('Color:', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        alt={props.title} />
      <ProductForm price={price} sizes={props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} colors={props.colors} currentColor={currentColor} setCurrentColor={setCurrentColor} action={handleClick} />
    </article>
  )
};

export default Product;