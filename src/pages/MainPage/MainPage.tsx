import PageStyles from '../page.module.scss';
import styles from './MainPage.module.scss';
import { MainFooter } from '../../components/MainFooter/MainFooter';
import { MainHeader } from '../../components/MainHeader/MainHeader';
import { CreateCalendar } from '../../components/CreateCalendar/CreateCalendar';

export interface MainPageProps {
    className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
    return (
        <div className={PageStyles.Page}>
            <MainHeader className={PageStyles.Header} />
            <div className={PageStyles.Panel}>
                <div className={styles.main_calendar}>메인 패널</div>
                <CreateCalendar className={styles.create_calendar} />
            </div>
            <MainFooter className={PageStyles.Footer} />
        </div>
    );
};
