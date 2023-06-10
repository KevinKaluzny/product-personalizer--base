import styles from './ProductImage.module.scss';

const ProductImage = props => {
    return (
        <div className={styles.imageContainer}>
          <img 
            className={styles.image}
            alt={props.alt}
            src={props.src} />
        </div>
    );
}

export default ProductImage;