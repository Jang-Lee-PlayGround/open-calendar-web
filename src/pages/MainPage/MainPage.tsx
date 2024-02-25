import PageStyles from '../page.module.scss';
import styles from './MainPage.module.scss';
import PopupButton_png from '../../assets/icon/CreateCalendar.png';
import { MainFooter } from '../../components/MainFooter/MainFooter';
import { MainHeader } from '../../components/MainHeader/MainHeader';
import { PopupButton } from '../../components/PopupButton/PopupButton';

export interface MainPageProps {}

export const MainPage = () => {
    return (
        <div className={PageStyles.Page}>
            <MainHeader className={PageStyles.Header} />
            <div className={PageStyles.Panel}>
                <div className={styles.main_calendar}>메인 패널</div>
                <PopupButton className={styles.create_calendar_popup} buttonIcon={PopupButton_png}>
                    <div className={styles.create_panel}>
                        <input type="text"></input>
                    </div>
                </PopupButton>
            </div>
            <MainFooter className={PageStyles.Footer} />
        </div>
    );
};
