import styles from './CreateCalendar.module.scss';
import CreateCalendar_png from '../../assets/icon/CreateCalendar.png';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Popup } from '../Popup/Popup';
import { ReactComponent as ReactLogo } from '../../assets/react.svg';

export interface CreateCalendarProps {
    className?: string;
}

export const CreateCalendar = ({ className }: CreateCalendarProps) => {
    const [isActive, setActive] = useState(false);
    // useEffect(() => {
    //     console.log('CreateCalendar');
    // });
    return (
        <div className={classNames(className)}>
            <Popup isActive={isActive} setActive={setActive}>
                <div className={styles.create_panel}>
                    <input type="text"></input>
                </div>
            </Popup>
            <div className={styles.button_container}>
                <div className={styles.filler} />
                <button className={styles.button} onClick={() => setActive(true)}>
                    <img className={styles.image} src={CreateCalendar_png} />
                </button>
            </div>
        </div>
    );
};
