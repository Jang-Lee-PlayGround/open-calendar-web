import PageStyles from '../page.module.scss';
import styles from './main-page.module.scss';
import { MainFooter } from '../../components/main-footer/main-footer';
import { MainHeader } from '../../components/main-header/main-header';

export interface MainPageProps {
    className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
    return (
        <div className={PageStyles.Page}>
            <MainHeader className={PageStyles.Header} />
            <div className={PageStyles.Panel}>
                <div className={styles.main_calendar}>메인 패널</div>
            </div>
            <MainFooter className={PageStyles.Footer} />
        </div>
    );
};
