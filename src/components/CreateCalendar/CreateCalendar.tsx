import styles from './CreateCalendar.module.scss';
import CreateCalendar_png from '../../assets/icon/CreateCalendar.png';
import classNames from 'classnames';

export interface CreateCalendarProps {
    className?: string;
}

export const CreateCalendar = ({ className }: CreateCalendarProps) => {
    return (
        <div className={classNames(className, styles.root)}>
            <div className={styles.flex_continer}>
                <div className={styles.filler} />
                <button className={styles.button}>
                    <img className={styles.image} src={CreateCalendar_png}></img>
                </button>
            </div>
        </div>
    );
};
