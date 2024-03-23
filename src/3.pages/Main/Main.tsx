import PageStyles from "../page.module.scss";
import { MainHeader } from "../../4.widgets/widgets";
import { MainPanel } from "../../4.widgets/widgets";
import { MainFooter } from "../../4.widgets/widgets";

export interface MainProps {}

export const Main = () => {
	return (
		<div className={PageStyles.Page}>
			<MainHeader className={PageStyles.Header} />
			<MainPanel className={PageStyles.Panel} />
			<MainFooter className={PageStyles.Footer} />
		</div>
	);
};
