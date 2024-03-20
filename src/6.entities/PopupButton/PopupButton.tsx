import styles from "./PopupButton.module.scss";
import classNames from "classnames";
import { ReactElement, useState } from "react";
import { Popup } from "./Popup/Popup";

export interface PopupButtonProps {
	className?: string;
	children: ReactElement | ReactElement[];
	buttonIcon?: string;
	isActive?: boolean;
	setActive?: Function;
}

export const PopupButton = ({
	className,
	children,
	buttonIcon,
	isActive,
	setActive,
}: PopupButtonProps) => {
	if (isActive === undefined) {
		[isActive, setActive] = useState(false);
	}
	return (
		<div className={classNames(className)}>
			<Popup isActive={isActive} setActive={setActive}>
				{children}
			</Popup>
			<div className={styles.button_container}>
				<div className={styles.filler} />
				<button
					className={styles.button}
					onClick={() => setActive!(true)}
				>
					{buttonIcon ? (
						<img className={styles.image} src={buttonIcon} />
					) : (
						<div className={styles.image}>popup</div>
					)}
				</button>
			</div>
		</div>
	);
};
