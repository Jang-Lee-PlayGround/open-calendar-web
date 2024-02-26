import classNames from 'classnames';
import styles from './Popup.module.scss';
import { ReactElement, useEffect, useState } from 'react';

export interface PopupProps {
    className?: string;
    isActive?: boolean;
    setActive?: Function;
    children: ReactElement | ReactElement[];
}

export const Popup = ({ className, isActive, setActive, children }: PopupProps) => {
    if (isActive === undefined) {
        [isActive, setActive] = useState(false);
    }
    return (
        <div className={classNames(className)}>
            {isActive ? (
                <div className={styles.background} onClick={() => setActive!(false)} />
            ) : null}
            <div className={styles.container}>{isActive ? children : null}</div>
        </div>
    );
};
