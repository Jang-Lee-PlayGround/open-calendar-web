import { CONFIG } from "../config";
export async function loadButtonPages() {
	return await Promise.all(
		CONFIG.BUTTON_PAGES.map(async (page) => {
			const TargetPage = await import(`./${page}/${page}.tsx`).then(
				(e) => e[page]
			);
			return [page, TargetPage];
		})
	).then((list) => Object.fromEntries(list));
}

export { History } from "./History/History";
export { Main } from "./Main/Main";
export { Profile } from "./Profile/Profile";
export { Search } from "./Search/Search";
export { Signin } from "./Signin/Signin";
export * as styles from "./page.module.scss";
