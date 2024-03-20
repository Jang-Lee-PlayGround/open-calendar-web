import PageStyles from "../page.module.scss";
import styles from "./Main.module.scss";
import PopupButton_png from "../../assets/icon/CreateCalendar.png";
import { MainFooter } from "../../../src/4.widgets/MainFooter/MainFooter";
import { MainHeader } from "../../../src/4.widgets/MainHeader/MainHeader";
import { PopupButton } from "../../6.entities/PopupButton/PopupButton";

export interface MainProps {}

export const Main = () => {
	return (
		<div className={PageStyles.Page}>
			<MainHeader className={PageStyles.Header} />
			<div className={PageStyles.Panel}>
				<div className={styles.main_calendar}>메인 패널</div>
				<PopupButton
					className={styles.create_calendar_popup}
					buttonIcon={PopupButton_png}
				>
					<div className={styles.create_panel}>
						<input type="text"></input>
					</div>
				</PopupButton>
			</div>
			<MainFooter className={PageStyles.Footer} />
		</div>
	);
};
