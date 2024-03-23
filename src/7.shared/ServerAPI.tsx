import { CONFIG } from "../config";

export const sendRequests = {
	async post(params: {
		url: string;
		body?: any;
		onSuccess?: Function;
		onFailure?: Function;
		onError?: Function;
	}) {
		const { url, body, onSuccess, onFailure, onError } = params;
		try {
			// Perform POST request with form data
			const response = await fetch(`${CONFIG.SERVER_BASE}${url}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Api-Version": CONFIG.API_VERSION,
				},
				body: JSON.stringify(body),
			}).then(async (response) => {
				return {
					isOK: response.ok,
					json: await response.json(),
				};
			});
			if (response.isOK) {
				return onSuccess ? onSuccess(response.json) : null;
			} else {
				return onFailure ? onFailure(response.json) : null;
			}
		} catch (error) {
			return onError ? onError(error) : null;
		}
	},
};

export function jsonFromForm(event: React.FormEvent<HTMLFormElement>) {
	event.preventDefault();
	const formData = new FormData(event.currentTarget);
	const jsonData: any = {};
	formData.forEach((value, key) => {
		jsonData[key] = value;
	});
	return jsonData;
}
