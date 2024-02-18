import PageStyles from '../page.module.scss';
import styles from './search-page.module.scss';
import { MainFooter } from '../../components/main-footer/main-footer';
import { MainHeader } from '../../components/main-header/main-header';

export interface SearchPageProps {
    className?: string;
}

export const SearchPage = ({ className }: SearchPageProps) => {
    return (
        <div className={PageStyles.Page}>
            <MainHeader className={PageStyles.Header} />
            <div className={styles.root}>
                <input className={styles.textinput} type="text" />
            </div>
            <div className={PageStyles.Panel}>
                <div className={styles.main_calendar}>검색 패널</div>
            </div>
            <MainFooter className={PageStyles.Footer} />
        </div>
    );
};
