import PageStyles from "../page.module.scss";
import { MainFooter } from "../../../src/4.widgets/MainFooter/MainFooter";
import { MainHeader } from "../../../src/4.widgets/MainHeader/MainHeader";

export interface ProfileProps {}

export const Profile = ({}: ProfileProps) => {
	return (
		<div className={PageStyles.Page}>
			<MainHeader className={PageStyles.Header} />
			<div className={PageStyles.Panel}>
				<div>내 프로필 패널</div>
			</div>
			<MainFooter className={PageStyles.Footer} />
		</div>
	);
};
