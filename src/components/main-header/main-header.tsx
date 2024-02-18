import classNames from 'classnames';
import styles from './main-header.module.scss';

export interface MainHeaderProps {
    className?: string;
}

export const MainHeader = ({ className }: MainHeaderProps) => {
    return <div className={styles.root}>메인 헤더</div>;
};
