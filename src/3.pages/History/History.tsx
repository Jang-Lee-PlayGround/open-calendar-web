import PageStyles from "../page.module.scss";
import { MainFooter } from "../../4.widgets/MainFooter/MainFooter";
import { MainHeader } from "../../4.widgets/MainHeader/MainHeader";

export interface HistoryProps {}

export const History = ({}: HistoryProps) => {
	return (
		<div className={PageStyles.Page}>
			<MainHeader className={PageStyles.Header} />
			<div className={PageStyles.Panel}>
				<div>활동 이력 패널</div>
			</div>
			<MainFooter className={PageStyles.Footer} />
		</div>
	);
};
