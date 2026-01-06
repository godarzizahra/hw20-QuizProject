import type { Dispatch } from "react";
import type { Action } from "../../context/reducer";

interface QuestionComponentProps {
	dispatch: Dispatch<Action>;
}

export function Question({ dispatch }: QuestionComponentProps) {
	const handleNext = () => {
		dispatch({ type: "SET_QUESTION", payload: false });
		dispatch({ type: "SET_FINISH", payload: true });
	};

	return (
		<div className="bg-[#9334ea] text-black w-full h-screen flex flex-col items-center justify-around">
			<img
				src="../../../src/assets/images/logo.png"
				alt="logo"
				className="w-3/12"
			/>
			<span className="bg-white w-3/4 h-25 rounded-xl p-2">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, eos
				dolore. Id nam minima deleniti?
			</span>
			<div className="flex flex-col items-center gap-3 w-full ">
				<span className="bg-[#5fead5] w-1/2 p-2 rounded-md">q1</span>
				<span className="bg-[#5fead5] w-1/2 p-2 rounded-md">q2</span>
				<span className="bg-[#5fead5] w-1/2 p-2 rounded-md">q3</span>
				<span className="bg-[#5fead5] w-1/2 p-2 rounded-md">q4</span>
			</div>
			<button onClick={handleNext}>پایان</button>
		</div>
	);
}
