// load state from localStorage
export const loadStateFromLocalStorage = initialState => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			return initialState;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

// save state to localStorage
export const saveStateToLocalStorage = state => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("state", serializedState);
	} catch {
		// ..
	}
};
