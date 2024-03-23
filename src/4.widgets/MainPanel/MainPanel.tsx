import classNames from "classnames";
import mainPanelStyles from "./MainPanel.module.scss";
import { CreateCalendar } from "../../5.features/features";

export interface MainPanelProps {
	className?: string;
}

export const MainPanel = ({ className }: MainPanelProps) => {
	return (
		<div className={classNames(className)}>
			<div className={mainPanelStyles.main_calendar}>메인 패널</div>
			<CreateCalendar className={mainPanelStyles.create_calendar_popup} />
		</div>
	);
};
