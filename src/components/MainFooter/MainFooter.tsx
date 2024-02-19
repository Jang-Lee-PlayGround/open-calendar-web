import classNames from 'classnames';
import styles from './MainFooter.module.scss';
import { LinkButton } from '../LinkButton/LinkButton';

export interface MainFooterProps {
    className?: string;
}

export const MainFooter = ({ className }: MainFooterProps) => {
    return (
        <div className={classNames(className, styles.root)}>
            <LinkButton className={styles.button} linkPath="/MainPage" buttonName="메인 캘린더" />
            <LinkButton className={styles.button} linkPath="/SearchPage" buttonName="캘린더 탐색" />
            <LinkButton className={styles.button} linkPath="/MainPage" buttonName="내 프로필" />
            <LinkButton className={styles.button} linkPath="/MainPage" buttonName="활동 이력" />
        </div>
    );
};
