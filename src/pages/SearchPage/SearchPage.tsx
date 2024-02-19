import PageStyles from '../page.module.scss';
import styles from './SearchPage.module.scss';
import { MainFooter } from '../../components/MainFooter/MainFooter';
import { MainHeader } from '../../components/MainHeader/MainHeader';

export interface SearchPageProps {
    className?: string;
}

export const SearchPage = ({ className }: SearchPageProps) => {
    return (
        <div className={PageStyles.Page}>
            <MainHeader className={PageStyles.Header} />
            <div className={PageStyles.Panel}>
                <div className={styles.search_bar}>
                    <input className={styles.textinput} type="text" />
                </div>
                <div className={styles.main_calendar}>검색 패널</div>
            </div>
            <MainFooter className={PageStyles.Footer} />
        </div>
    );
};
