export const load = () => {
	helperFunction();
	return {
		msg: 'hi'
	};
};

function helperFunction() {
	throw new Error('Source-mapped Server Error!');
}
