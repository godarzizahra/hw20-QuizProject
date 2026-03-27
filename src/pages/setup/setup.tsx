import type { Dispatch } from "react";
import Setup from "../../components/setup/setup";
import type { Action } from "../../context/reducer";

interface SetupPageProps {
	dispatch: Dispatch<Action>;
}
export default function SetupPage({ dispatch }: SetupPageProps) {
	return <Setup dispatch={dispatch} />;
}
