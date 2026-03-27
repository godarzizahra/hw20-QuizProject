import { useReducer } from "react";

import { initialStatePage, reducerPage } from "./context/reducer";
import FinishPage from "./pages/finish/finish";
import QuestionPage from "./pages/question/question";
import SetupPage from "./pages/setup/setup";
import StartPage from "./pages/start/start";

function App() {
	const [state, dispatch] = useReducer(reducerPage, initialStatePage);
	return (
		<>
			{state.start && <StartPage dispatch={dispatch} />}
			{state.setup && <SetupPage dispatch={dispatch} />}
			{state.question && <QuestionPage dispatch={dispatch} />}
			{state.finish && <FinishPage dispatch={dispatch} />}
		</>
	);
}

export default App;
