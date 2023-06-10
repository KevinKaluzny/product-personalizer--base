import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = props => {
    return (
        <div>
            <header>
                <h2 className={styles.name}>Kodilla shirt</h2>
                <span className={styles.price}>Price: {props.price}$</span>
            </header>
            <form>
                <div className={styles.sizes}>
                    <h3 className={styles.optionLabel}>Sizes</h3>
                    <ul className={styles.choices}>
                        <li><button type="button" className={clsx(props.currentSize.name === props.sizes[0].name && styles.active)} onClick={() => props.setCurrentSize(props.sizes[0])}>{props.sizes[0].name}</button></li>
                        <li><button type="button" className={clsx(props.currentSize.name === props.sizes[1].name && styles.active)} onClick={() => props.setCurrentSize(props.sizes[1])}>{props.sizes[1].name}</button></li>
                        <li><button type="button" className={clsx(props.currentSize.name === props.sizes[2].name && styles.active)} onClick={() => props.setCurrentSize(props.sizes[2])}>{props.sizes[2].name}</button></li>
                        <li><button type="button" className={clsx(props.currentSize.name === props.sizes[3].name && styles.active)} onClick={() => props.setCurrentSize(props.sizes[3])}>{props.sizes[3].name}</button></li>
                    </ul>
                </div>
                <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
                <Button className={styles.button} action={event => props.action(event)}>
                    <span className="fa fa-shopping-cart" />
                </Button>
            </form>
        </div>
    );
}

export default ProductForm;