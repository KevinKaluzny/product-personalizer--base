import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = props => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                <li><button type="button" className={clsx(props.currentSize.name === props.sizes[0].name && styles.active)} onClick={() => props.setCurrentSize(props.sizes[0])}>{props.sizes[0].name}</button></li>
                <li><button type="button" className={clsx(props.currentSize.name === props.sizes[1].name && styles.active)} onClick={() => props.setCurrentSize(props.sizes[1])}>{props.sizes[1].name}</button></li>
                <li><button type="button" className={clsx(props.currentSize.name === props.sizes[2].name && styles.active)} onClick={() => props.setCurrentSize(props.sizes[2])}>{props.sizes[2].name}</button></li>
                <li><button type="button" className={clsx(props.currentSize.name === props.sizes[3].name && styles.active)} onClick={() => props.setCurrentSize(props.sizes[3])}>{props.sizes[3].name}</button></li>
            </ul>
        </div>
    );
}

export default OptionSize;