import classNames from 'classnames';
import styles from './Popup.module.scss';
import { ReactElement } from 'react';

export interface PopupProps {
    className?: string;
    isActive: boolean;
    children: ReactElement | ReactElement[]; // Updated to allow passing multiple children
}

export const Popup = ({ className, isActive, children }: PopupProps) => {
    return <div className={classNames(className, styles.root)}>{isActive ? children : null}</div>;
};
