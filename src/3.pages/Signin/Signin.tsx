import PageStyles from "../page.module.scss";
import { SigninPanel } from "../../4.widgets/widgets";

export interface SigninProps {}

export const Signin = () => {
	return (
		<div className={PageStyles.Page}>
			<SigninPanel />
		</div>
	);
};
