import styles from './LinkButton.module.scss';
import { Link } from 'react-router-dom';

export interface MainFooterProps {
    className?: string;
    linkPath: string;
    buttonName: string;
}

export const LinkButton = ({ className, linkPath, buttonName }: MainFooterProps) => {
    return (
        <Link to={linkPath} className={className}>
            <button className={styles.button}>{buttonName}</button>
        </Link>
    );
};
