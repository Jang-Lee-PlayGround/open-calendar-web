import styles from "./FixedPopupButton.module.scss";
import { ReactElement, useState, cloneElement } from "react";
import { Popup } from "../Popup/Popup";
export interface FixedPopupButtonProps {
	className?: string;
	children: ReactElement | ReactElement[];
	buttonElement: ReactElement;
	isActive?: boolean;
	setActive?: Function;
}

export const FixedPopupButton = ({
	className,
	children,
	buttonElement,
	isActive,
	setActive,
}: FixedPopupButtonProps) => {
	if (isActive === undefined) {
		[isActive, setActive] = useState(false);
	}
	const modifiedButtonElement = cloneElement(buttonElement, {
		onClick: function () {
			// buttonElement.props.onClick ??
			// 	(await buttonElement.props.onClick());
			setActive!(true);
		},
	});

	return (
		<div className={className}>
			<Popup isActive={isActive} setActive={setActive}>
				{children}
			</Popup>
			<div className={styles.button_container}>
				<div className={styles.filler} />
				{modifiedButtonElement}
			</div>
		</div>
	);
};
