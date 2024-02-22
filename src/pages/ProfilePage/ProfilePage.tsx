import PageStyles from '../page.module.scss';
import styles from './ProfilePage.module.scss';
import { MainFooter } from '../../components/MainFooter/MainFooter';
import { MainHeader } from '../../components/MainHeader/MainHeader';

export interface ProfilePageProps {}

export const ProfilePage = ({}: ProfilePageProps) => {
    return (
        <div className={PageStyles.Page}>
            <MainHeader className={PageStyles.Header} />
            <div className={PageStyles.Panel}>
                <div className={styles.main_calendar}>내 프로필 패널</div>
            </div>
            <MainFooter className={PageStyles.Footer} />
        </div>
    );
};
