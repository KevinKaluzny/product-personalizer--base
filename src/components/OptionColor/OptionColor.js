import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = props => {
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                <li><button type="button" className={clsx(props.colors[0] === 'blue' ? styles.colorBlue : styles.colorWhite, props.currentColor === props.colors[0] && styles.active)} onClick={() => props.setCurrentColor(props.colors[0])} /></li>
                <li><button type="button" className={clsx(props.colors[1] === 'red' ? styles.colorRed : styles.colorBlack, props.currentColor === props.colors[1] && styles.active)} onClick={() => props.setCurrentColor(props.colors[1])} /></li>
                <li><button type="button" className={clsx(props.colors[2] === 'green' ? styles.colorGreen : styles.colorRed, props.currentColor === props.colors[2] && styles.active)} onClick={() => props.setCurrentColor(props.colors[2])} /></li>
            </ul>
        </div>
    );
}

export default OptionColor;