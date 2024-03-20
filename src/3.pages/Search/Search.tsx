import PageStyles from "../page.module.scss";
import styles from "./Search.module.scss";
import { MainFooter } from "../../../src/4.widgets/MainFooter/MainFooter";
import { MainHeader } from "../../../src/4.widgets/MainHeader/MainHeader";

export interface SearchProps {}

export const Search = ({}: SearchProps) => {
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
