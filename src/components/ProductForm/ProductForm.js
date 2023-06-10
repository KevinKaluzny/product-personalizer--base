import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = props => {
    return (
        <div>
            <header>
                <h2 className={styles.name}>Kodilla shirt</h2>
                <span className={styles.price}>Price: {props.price}$</span>
            </header>
            <form>
                <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
                <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
                <Button className={styles.button} action={event => props.action(event)}>
                    <span className="fa fa-shopping-cart" />
                </Button>
            </form>
        </div>
    );
}

export default ProductForm;