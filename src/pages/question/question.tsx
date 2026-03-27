import type { Dispatch } from "react";
import { Question } from "../../components/question/question";
import type { Action } from "../../context/reducer";

interface QuestionPageProps {
	dispatch: Dispatch<Action>;
}

export default function QuestionPage({ dispatch }: QuestionPageProps) {
	return <Question dispatch={dispatch} />;
}
