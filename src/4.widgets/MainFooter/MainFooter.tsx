import classNames from "classnames";
import footer_styles from "./MainFooter.module.scss";
import shared_styles from "../../7.shared/shared.module.scss";
import { LinkButton } from "../../7.shared/component/LinkButton/LinkButton";
import { CONFIG } from "../../config";

export interface MainFooterProps {
	className?: string;
}

export const MainFooter = ({ className }: MainFooterProps) => {
	return (
		<div className={classNames(shared_styles.flex_row, className)}>
			{CONFIG.BUTTON_PAGES.map((page) => (
				<LinkButton
					className={footer_styles.button}
					linkPath={`/${page}`}
					buttonName={page}
					key={page}
				/>
			))}
		</div>
	);
};
