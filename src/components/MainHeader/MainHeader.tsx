import classNames from 'classnames';
import styles from './MainHeader.module.scss';

export interface MainHeaderProps {
    className?: string;
}

export const MainHeader = ({ className }: MainHeaderProps) => {
    return <div className={classNames(className, styles.root)}>메인 헤더</div>;
};
