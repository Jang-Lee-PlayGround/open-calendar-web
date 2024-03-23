import classNames from "classnames";
import shared_styles from "../../7.shared/shared.module.scss";

export interface MainHeaderProps {
	className?: string;
}

export const MainHeader = ({ className }: MainHeaderProps) => {
	return (
		<div className={classNames(className, shared_styles.flex_row)}>
			메인 헤더
		</div>
	);
};
