interface State {
	start: boolean;
	setup: boolean;
	finish: boolean;
	question: boolean;
}

export interface Action {
	type: "SET_START" | "SET_SETUP" | "SET_QUESTION" | "SET_FINISH";
	payload: boolean;
}

export const initialStatePage: State = {
	start: true,
	setup: false,
	question: false,
	finish: false,
};

export function reducerPage(state: State, action: Action) {
	switch (action.type) {
		case "SET_START":
			return {
				...state,
				start: action.payload,
			};
		case "SET_SETUP":
			return {
				...state,
				setup: action.payload,
			};
		case "SET_QUESTION":
			return {
				...state,
				question: action.payload,
			};
		case "SET_FINISH":
			return {
				...state,
				finish: action.payload,
			};
		default:
			return state;
	}
}
