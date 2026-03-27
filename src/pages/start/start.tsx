import Start from "../../components/start/start";
import type { Dispatch } from "react";
import type { Action } from "../../context/reducer";

interface StartPageProps {
	dispatch: Dispatch<Action>;
}

export default function StartPage({ dispatch }: StartPageProps) {
	return <Start dispatch={dispatch} />;
}
