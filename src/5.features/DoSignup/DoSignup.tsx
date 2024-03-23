import { useState } from "react";
import { jsonFromForm, sendRequests } from "../../7.shared/ServerAPI";
import { FixedPopupButton } from "../../7.shared/shared";
import doSignupStyle from "./DoSignup.module.scss";

interface SignupPanelProps {
	setActive: Function;
}
const SignupPanel = ({ setActive }: SignupPanelProps) => {
	async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		const jsonData = jsonFromForm(event);
		await sendRequests.post({
			url: "/app/user/create",
			body: jsonData,
			onSuccess: () => {
				alert("회원생성 성공");
				setActive(false);
			},
			onFailure: (res: any) => {
				alert(res.errorMessage);
			},
			onError: (error: Error) => {
				alert(error);
			},
		});
	}
	return (
		<form className={doSignupStyle.signup_panel} onSubmit={onSubmit}>
			<h1>SIGN UP</h1>
			<div className={doSignupStyle.input_container}>
				<input
					className={doSignupStyle.input}
					type="text"
					name="nickname"
					placeholder="nickname"
				/>
				{/* <input type="password" name="" placeholder="" /> */}
			</div>
			<button type="submit">제출</button>
		</form>
	);
};

export const DoSignup = () => {
	const [isActive, setActive] = useState(false);
	return (
		<FixedPopupButton
			isActive={isActive}
			setActive={setActive}
			buttonElement={<button>회원가입</button>}
		>
			<SignupPanel setActive={setActive} />
		</FixedPopupButton>
	);
};
