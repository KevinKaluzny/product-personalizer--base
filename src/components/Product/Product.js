import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>Kodilla shirt</h2>
          <span className={styles.price}>Price: { props.basePrice }$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={styles.active}>{ props.sizes[0].name }</button></li>
              <li><button type="button">{ props.sizes[1].name }</button></li>
              <li><button type="button">{ props.sizes[2].name }</button></li>
              <li><button type="button">{ props.sizes[3].name }</button></li>
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={clsx(props.colors[0] === 'blue' ? styles.colorBlue : styles.colorBlack, currentColor === props.colors[0] && styles.active)} /></li>
              <li><button type="button" className={clsx(props.colors[1] === 'red' ? styles.colorRed : styles.colorRed, currentColor === props.colors[1] && styles.active)} /></li>
              <li><button type="button" className={clsx(props.colors[2] === 'green' ? styles.colorGreen : styles.colorWhite, currentColor === props.colors[2] && styles.active)} /></li>
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;