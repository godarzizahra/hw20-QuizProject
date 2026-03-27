import { Finish } from "../../components/finish/finish";
import type { Dispatch } from "react";
import type { Action } from "../../context/reducer";

interface FinishPageProps {
	dispatch: Dispatch<Action>;
}
export default function FinishPage({ dispatch }: FinishPageProps) {
	return <Finish dispatch={dispatch} />;
}
