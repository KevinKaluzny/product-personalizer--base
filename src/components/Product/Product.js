import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage.js';
import { useState } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  function getPrice() {
    return props.basePrice + currentSize.additionalPrice;
  }

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
      <div>
        <header>
          <h2 className={styles.name}>Kodilla shirt</h2>
          <span className={styles.price}>Price: { getPrice() }$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={clsx(currentSize.name === props.sizes[0].name && styles.active)} onClick={() => setCurrentSize(props.sizes[0])}>{ props.sizes[0].name }</button></li>
              <li><button type="button" className={clsx(currentSize.name === props.sizes[1].name && styles.active)} onClick={() => setCurrentSize(props.sizes[1])}>{ props.sizes[1].name }</button></li>
              <li><button type="button" className={clsx(currentSize.name === props.sizes[2].name && styles.active)} onClick={() => setCurrentSize(props.sizes[2])}>{ props.sizes[2].name }</button></li>
              <li><button type="button" className={clsx(currentSize.name === props.sizes[3].name && styles.active)} onClick={() => setCurrentSize(props.sizes[3])}>{ props.sizes[3].name }</button></li>
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={clsx(props.colors[0] === 'blue' ? styles.colorBlue : styles.colorWhite, currentColor === props.colors[0] && styles.active)} onClick={() => setCurrentColor(props.colors[0])} /></li>
              <li><button type="button" className={clsx(props.colors[1] === 'red' ? styles.colorRed : styles.colorBlack, currentColor === props.colors[1] && styles.active)} onClick={() => setCurrentColor(props.colors[1])} /></li>
              <li><button type="button" className={clsx(props.colors[2] === 'green' ? styles.colorGreen : styles.colorRed, currentColor === props.colors[2] && styles.active)} onClick={() => setCurrentColor(props.colors[2])} /></li>
            </ul>
          </div>
          <Button className={styles.button} action={ event => handleClick(event) }>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;