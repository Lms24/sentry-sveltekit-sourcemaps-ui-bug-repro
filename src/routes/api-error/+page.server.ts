export const load = async ({ fetch }) => {
	// call the API route which errors
	try {
		const res = fetch('/api-error');
		return (await res).json();
	} catch {
		return {};
	}
};
