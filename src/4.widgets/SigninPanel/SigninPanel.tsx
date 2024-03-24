import { useNavigate } from "react-router-dom";
import signInPanelstyles from "./SigninPanel.module.scss";
import shared_styles from "../../7.shared/shared.module.scss";
import { jsonFromForm, sendRequests } from "../../7.shared/utillites/ServerAPI";
import { DoSignup } from "../../5.features/features";
import classNames from "classnames";

export const SigninPanel = () => {
	const navigate = useNavigate();
	async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		const jsonData = jsonFromForm(event);

		await sendRequests.post({
			url: "/test/user/get",
			body: jsonData,
			onSuccess: (res: any) => {
				const { recvUser } = res;
				//alert(JSON.stringify(recvUser));
				navigate("/Main");
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
		<div
			className={classNames(
				signInPanelstyles.signin_panel,
				shared_styles.flex_col
			)}
		>
			<h1 className={signInPanelstyles.title}>SIGN IN</h1>
			<form className={shared_styles.flex_col} onSubmit={onSubmit}>
				<div className={signInPanelstyles.input_container}>
					<input type="text" name="nickname" placeholder="nickname" />
					{/* <input type="password" name="" placeholder="" /> */}
				</div>
				<button className={signInPanelstyles.margin_item} type="submit">
					로그인
				</button>
			</form>
			<DoSignup />
		</div>
	);
};
