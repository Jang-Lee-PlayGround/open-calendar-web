import PageStyles from '../page.module.scss';
import styles from './HistoryPage.module.scss';
import { MainFooter } from '../../components/MainFooter/MainFooter';
import { MainHeader } from '../../components/MainHeader/MainHeader';

export interface HistoryPageProps {}

export const HistoryPage = ({}: HistoryPageProps) => {
    return (
        <div className={PageStyles.Page}>
            <MainHeader className={PageStyles.Header} />
            <div className={PageStyles.Panel}>
                <div className={styles.main_calendar}>활동 이력 패널</div>
            </div>
            <MainFooter className={PageStyles.Footer} />
        </div>
    );
};
