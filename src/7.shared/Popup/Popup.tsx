import classNames from "classnames";
import module_styles from "./Popup.module.scss";
import { ReactElement, useEffect, useState } from "react";

export interface PopupProps {
	className?: CSSModuleClasses[];
	isActive?: boolean;
	setActive?: Function;
	children: ReactElement | ReactElement[];
}

export const Popup = ({
	className,
	isActive,
	setActive,
	children,
}: PopupProps) => {
	if (isActive === undefined) {
		[isActive, setActive] = useState(false);
	}
	return (
		<div className={classNames(className)}>
			{isActive ? (
				<div
					className={module_styles.background}
					onClick={() => setActive!(false)}
				/>
			) : null}
			<div className={module_styles.child_container}>
				{isActive ? children : null}
			</div>
		</div>
	);
};
