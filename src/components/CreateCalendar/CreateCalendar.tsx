import styles from './CreateCalendar.module.scss';
import CreateCalendar_png from '../../assets/icon/CreateCalendar.png';
import classNames from 'classnames';
import { useState } from 'react';
import { Popup } from '../Popup/Popup';
import { ReactComponent as ReactLogo } from '../../assets/react.svg';

export interface CreateCalendarProps {
    className?: string;
}

export const CreateCalendar = ({ className }: CreateCalendarProps) => {
    const [isActive, setActive] = useState(false);
    function toggleActive() {
        isActive ? setActive(false) : setActive(true);
    }
    return (
        <div className={classNames(className, styles.root)}>
            <Popup isActive={isActive}>
                <ReactLogo
                    height="6em"
                    width="6em"
                    className={classNames(styles.logo, styles.react)}
                    title="React logo"
                />
            </Popup>
            <div className={styles.flex_continer}>
                <div className={styles.filler} />
                <button className={styles.button} onClick={toggleActive}>
                    <img className={styles.image} src={CreateCalendar_png} />
                </button>
            </div>
        </div>
    );
};
