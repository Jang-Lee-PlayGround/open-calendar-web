import { useState } from "react";
import { FixedPopupButton } from "../../7.shared/shared";
import createCalendarStyles from "./CreateCalendar.module.scss";
import classNames from "classnames";

interface CreateCalendarPanelProps {
	className?: string;
	setActive: Function;
}
const CreateCalendarPanel = ({
	className,
	setActive,
}: CreateCalendarPanelProps) => {
	async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		alert("TODO");
	}
	return (
		<form
			className={classNames(
				className,
				createCalendarStyles.createCalendar_panel
			)}
			onSubmit={onSubmit}
		>
			<h1>CreateCalendar</h1>
			<div className={createCalendarStyles.input_container}>
				<input
					className={createCalendarStyles.input}
					type="text"
					name="calendarName"
					placeholder="calendarName"
				/>
				{/* <input type="password" name="" placeholder="" /> */}
			</div>
			<button type="submit">제출</button>
		</form>
	);
};

interface CreateCalendarProps {
	className?: string;
}
export const CreateCalendar = ({ className }: CreateCalendarProps) => {
	const [isActive, setActive] = useState(false);
	return (
		<FixedPopupButton
			className={className}
			isActive={isActive}
			setActive={setActive}
			buttonElement={<button>캘린더 만들기</button>}
		>
			<CreateCalendarPanel setActive={setActive} />
		</FixedPopupButton>
	);
};
