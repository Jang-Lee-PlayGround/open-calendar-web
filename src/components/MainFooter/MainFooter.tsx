import classNames from 'classnames';
import styles from './MainFooter.module.scss';
import { LinkButton } from '../LinkButton/LinkButton';
import { CONFIG } from '../../config';

export interface MainFooterProps {
    className?: string;
}

export const MainFooter = ({ className }: MainFooterProps) => {
    return (
        <div className={classNames(className, styles.root)}>
            {CONFIG.PAGES.map((page) => (
                <LinkButton
                    className={styles.button}
                    linkPath={`/${page}`}
                    buttonName={page}
                    key={page}
                />
            ))}
        </div>
    );
};